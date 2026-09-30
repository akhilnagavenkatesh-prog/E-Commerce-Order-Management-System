-- E-Commerce Order Management System
-- DML: Insert, Update and Delete Operations

USE ecommerce_order_management;

-- =========================
-- 1. INSERT CUSTOMER DATA
-- =========================

INSERT INTO CUSTOMER
(Customer_ID, Name, Email, Phone, Address)
VALUES
(1, 'Rahul Kumar', 'rahul@gmail.com', '9876543210', 'Hyderabad'),
(2, 'Priya Sharma', 'priya@gmail.com', '9876543211', 'Vijayawada'),
(3, 'Arjun Reddy', 'arjun@gmail.com', '9876543212', 'Visakhapatnam'),
(4, 'Sneha Rao', 'sneha@gmail.com', '9876543213', 'Guntur'),
(5, 'Kiran Kumar', 'kiran@gmail.com', '9876543214', 'Kakinada');


-- =========================
-- 2. INSERT PRODUCT DATA
-- =========================

INSERT INTO PRODUCT
(Product_ID, Product_Name, Price, Stock, Category)
VALUES
(101, 'Laptop', 55000.00, 20, 'Electronics'),
(102, 'Smartphone', 25000.00, 35, 'Electronics'),
(103, 'Headphones', 2500.00, 50, 'Accessories'),
(104, 'Smart Watch', 5000.00, 25, 'Wearables'),
(105, 'Keyboard', 1500.00, 40, 'Accessories'),
(106, 'Mouse', 800.00, 30, 'Accessories');


-- =========================
-- 3. INSERT ORDER DATA
-- =========================

INSERT INTO ORDERS
(Order_ID, Order_Date, Total_Amount, Order_Status, Customer_ID)
VALUES
(1001, '2026-09-01', 55000.00, 'Confirmed', 1),
(1002, '2026-09-03', 27500.00, 'Shipped', 2),
(1003, '2026-09-05', 7500.00, 'Delivered', 3),
(1004, '2026-09-07', 5000.00, 'Pending', 4),
(1005, '2026-09-10', 2300.00, 'Confirmed', 5);


-- =========================
-- 4. INSERT ORDER ITEM DATA
-- =========================

INSERT INTO ORDER_ITEM
(Order_Item_ID, Order_ID, Product_ID, Quantity, SubTotal)
VALUES
(1, 1001, 101, 1, 55000.00),
(2, 1002, 102, 1, 25000.00),
(3, 1002, 103, 1, 2500.00),
(4, 1003, 104, 1, 5000.00),
(5, 1003, 103, 1, 2500.00),
(6, 1004, 104, 1, 5000.00),
(7, 1005, 105, 1, 1500.00),
(8, 1005, 106, 1, 800.00);


-- =========================
-- 5. UPDATE OPERATIONS
-- =========================

-- Update customer address
UPDATE CUSTOMER
SET Address = 'Hyderabad, Telangana'
WHERE Customer_ID = 1;

-- Update product price
UPDATE PRODUCT
SET Price = 24000.00
WHERE Product_ID = 102;

-- Update product stock
UPDATE PRODUCT
SET Stock = 45
WHERE Product_ID = 103;

-- Update order status
UPDATE ORDERS
SET Order_Status = 'Delivered'
WHERE Order_ID = 1002;


-- =========================
-- 6. DELETE OPERATION
-- =========================

-- Delete unused product
DELETE FROM PRODUCT
WHERE Product_ID = 106;
