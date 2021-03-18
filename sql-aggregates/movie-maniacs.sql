select "customers"."firstName",
        "customers"."lastName",
        sum("payments"."amount") as "sumOfPayments"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "sumOfPayments" desc;
