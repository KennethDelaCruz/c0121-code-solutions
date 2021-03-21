const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log('server is active');
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
      if (!result) {
        res.status(500).json({
          error: 'Cannot find list of grades'
        });
      } else {
        res.status(200).json(result.rows);
      }
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
  if (!req.body.name || !req.body.course || !req.body.score || req.body.score <= 0) {
    return res.status(400).json({
      error: 'Invalid Data Values OR not all Data requirements met'
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
      if (!params) {
        res.status(404).json({
          error: 'an Unexpected error has occured'
        });
      } else {
        res.json(newRow);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An Unexpected error occurred.'
      });
    });
});
