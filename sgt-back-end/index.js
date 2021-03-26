const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000, () => {
});

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
  from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'unexpected error occured'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  select *
    from "grades"
   where "gradeId" = $1
   `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: 'invalid gradeId'
    });
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    return res.status(400).json({
      error: 'Invalid Data Values OR not all data requirements met'
    });
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;

  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const newRow = result.rows[0];
      res.status(201).json(newRow);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An Unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  if (req.params.gradeId <= 0) {
    return res.status(404).json({
      error: 'Invalid gradeId, gradeId must be a non-negative number'
    });
  } else if (req.body.score <= 0) {
    return res.status(404).json({
      error: 'Invalid score, score must be a non-negative number'
    });
  } else if (!req.body.course) {
    return res.status(400).json({
      error: 'score does not exist'
    });
  }
  const sql = `
  update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *;
    `;
  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const updateRow = result.rows[0];
      if (!updateRow) {
        return res.status(404).json({
          error: 'update failed, gradeId does not exist'
        });
      } else {
        return res.status(200).json(updateRow);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'unexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: 'invalid gradeId'
    });
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1;
  returning *
  `;
  const params = [req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      return res.sendStatus(404);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        error: 'unexpected error occurred'
      });
    });
});
