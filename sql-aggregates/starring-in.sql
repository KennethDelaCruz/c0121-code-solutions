select "categories"."name",
        count("filmCategory".*)
  from "filmCategory"
  join "categories" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' AND "lastName" = 'Monroe'
group by "categories"."name"
;
