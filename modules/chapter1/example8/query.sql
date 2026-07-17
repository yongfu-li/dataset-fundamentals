SELECT o.order_id, c.name AS customer_name, o.order_date, o.total_amount
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;
