select "films"."title" as "filmTitle",
      (sum("payments"."amount") - "films"."replacementCost") as "profitMargin"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
group by "films"."filmId"
order by "profitMargin" desc
limit 5;
