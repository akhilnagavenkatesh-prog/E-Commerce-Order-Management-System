-- SQL Queries for E-Commerce Order Management System

-- 1. Basic SELECT
SELECT * FROM CUSTOMER;


-- 2. WHERE + ORDER BY
SELECT *
FROM PRODUCT
WHERE Price > 5000
ORDER BY Price DESC;


-- 3. Aggregate Functions
SELECT
    COUNT(*) AS Total_Products,
    MAX(Price) AS Maximum_Price,
    MIN(Price) AS Minimum_Price,
    AVG(Price) AS Average_Price,
    SUM(Stock) AS Total_Stock
FROM PRODUCT;


-- 4. INNER JOIN
SELECT
    O.Order_ID,
    C.Name AS Customer_Name,
    O.Order_Date,
    O.Total_Amount,
    O.Order_Status
FROM ORDERS O
INNER JOIN CUSTOMER C
ON O.Customer_ID = C.Customer_ID;


-- 5. GROUP BY + HAVING
SELECT
    Customer_ID,
    COUNT(*) AS Order_Count
FROM ORDERS
GROUP BY Customer_ID
HAVING COUNT(*) >= 1;


-- 6. SUBQUERY
SELECT
    Product_ID,
    Product_Name,
    Price
FROM PRODUCT
WHERE Price >
(
    SELECT AVG(Price)
    FROM PRODUCT
);
