select "countries"."name",
        count("cities".*) as "totalCities"
  from "countries"
  join "cities" using ("countryId")
group by "countries"."countryId";
