/**
 * ============================================================================
 * E-COMMERCE ORDER MANAGEMENT SYSTEM - JAVASCRIPT CONTROLLER
 * College DBMS Project Frontend
 * Technologies: HTML5, CSS3, Vanilla JavaScript (ES6+), LocalStorage Engine
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DEFAULT RELATIONAL SEED DATA
  // --------------------------------------------------------------------------
  const DEFAULT_CUSTOMERS = [
    {
      Customer_ID: 'CUST-101',
      Customer_Name: 'Rajesh Sharma',
      Email: 'rajesh.sharma@example.com',
      Phone: '+91 98765 43210',
      Address: 'Flat 402, Green Valley Apts, Hyderabad, Telangana'
    },
    {
      Customer_ID: 'CUST-102',
      Customer_Name: 'Priya Ananya Patel',
      Email: 'priya.patel@example.com',
      Phone: '+91 98123 45678',
      Address: '12 Lotus Boulevard, Indiranagar, Bengaluru, Karnataka'
    },
    {
      Customer_ID: 'CUST-103',
      Customer_Name: 'Vikram Aditya Rao',
      Email: 'vikram.rao@example.com',
      Phone: '+91 97654 32109',
      Address: 'Plot 88, Jubilee Hills, Hyderabad, Telangana'
    },
    {
      Customer_ID: 'CUST-104',
      Customer_Name: 'Sneha Kulkarni',
      Email: 'sneha.k@example.com',
      Phone: '+91 96543 21098',
      Address: '45 Ocean View, Marine Drive, Mumbai, Maharashtra'
    },
    {
      Customer_ID: 'CUST-105',
      Customer_Name: 'Rohan Verma',
      Email: 'rohan.v@example.com',
      Phone: '+91 95432 10987',
      Address: 'A-19 Sector 62, Noida, Delhi NCR'
    },
    {
      Customer_ID: 'CUST-106',
      Customer_Name: 'Ananya Sen',
      Email: 'ananya.sen@example.com',
      Phone: '+91 94321 09876',
      Address: '77 Park Street, Kolkata, West Bengal'
    },
    {
      Customer_ID: 'CUST-107',
      Customer_Name: 'Karthik Subramanian',
      Email: 'karthik.s@example.com',
      Phone: '+91 93210 98765',
      Address: '24 Anna Nagar West, Chennai, Tamil Nadu'
    },
    {
      Customer_ID: 'CUST-108',
      Customer_Name: 'Meera Nambiar',
      Email: 'meera.n@example.com',
      Phone: '+91 92109 87654',
      Address: 'G-6 Panampilly Nagar, Kochi, Kerala'
    }
  ];

  const DEFAULT_PRODUCTS = [
    {
      Product_ID: 'PROD-201',
      Product_Name: 'Apple iPhone 15 Pro (128GB)',
      Category: 'Electronics',
      Price: 1199.00,
      Stock: 24
    },
    {
      Product_ID: 'PROD-202',
      Product_Name: 'Sony WH-1000XM5 Wireless Headphones',
      Category: 'Audio',
      Price: 349.00,
      Stock: 45
    },
    {
      Product_ID: 'PROD-203',
      Product_Name: 'Dell XPS 15 OLED Laptop',
      Category: 'Computers',
      Price: 1799.00,
      Stock: 12 // Low Stock alert
    },
    {
      Product_ID: 'PROD-204',
      Product_Name: 'Nike Air Zoom Pegasus 40',
      Category: 'Footwear',
      Price: 130.00,
      Stock: 68
    },
    {
      Product_ID: 'PROD-205',
      Product_Name: 'Samsung 55" 4K OLED Smart TV',
      Category: 'Electronics',
      Price: 899.00,
      Stock: 8 // Low Stock alert
    },
    {
      Product_ID: 'PROD-206',
      Product_Name: 'Levi\'s Men\'s 511 Slim Jeans',
      Category: 'Apparel',
      Price: 65.00,
      Stock: 85
    },
    {
      Product_ID: 'PROD-207',
      Product_Name: 'Nespresso Vertuo Coffee Machine',
      Category: 'Home & Kitchen',
      Price: 199.00,
      Stock: 30
    },
    {
      Product_ID: 'PROD-208',
      Product_Name: 'Logitech MX Master 3S Mouse',
      Category: 'Accessories',
      Price: 99.00,
      Stock: 52
    },
    {
      Product_ID: 'PROD-209',
      Product_Name: 'Bose SoundLink Flex Bluetooth Speaker',
      Category: 'Audio',
      Price: 149.00,
      Stock: 40
    },
    {
      Product_ID: 'PROD-210',
      Product_Name: 'Kindle Paperwhite (16 GB)',
      Category: 'Electronics',
      Price: 149.00,
      Stock: 35
    }
  ];

  const DEFAULT_ORDERS = [
    {
      Order_ID: 'ORD-301',
      Customer_ID: 'CUST-101',
      Order_Date: '2026-09-15',
      Total_Amount: 1548.00,
      Status: 'Delivered'
    },
    {
      Order_ID: 'ORD-302',
      Customer_ID: 'CUST-102',
      Order_Date: '2026-09-18',
      Total_Amount: 1898.00,
      Status: 'Shipped'
    },
    {
      Order_ID: 'ORD-303',
      Customer_ID: 'CUST-103',
      Order_Date: '2026-09-20',
      Total_Amount: 260.00,
      Status: 'Processing'
    },
    {
      Order_ID: 'ORD-304',
      Customer_ID: 'CUST-104',
      Order_Date: '2026-09-22',
      Total_Amount: 899.00,
      Status: 'Pending'
    },
    {
      Order_ID: 'ORD-305',
      Customer_ID: 'CUST-105',
      Order_Date: '2026-09-24',
      Total_Amount: 329.00,
      Status: 'Delivered'
    },
    {
      Order_ID: 'ORD-306',
      Customer_ID: 'CUST-106',
      Order_Date: '2026-09-25',
      Total_Amount: 149.00,
      Status: 'Cancelled'
    },
    {
      Order_ID: 'ORD-307',
      Customer_ID: 'CUST-107',
      Order_Date: '2026-09-27',
      Total_Amount: 498.00,
      Status: 'Shipped'
    },
    {
      Order_ID: 'ORD-308',
      Customer_ID: 'CUST-108',
      Order_Date: '2026-09-28',
      Total_Amount: 199.00,
      Status: 'Processing'
    }
  ];

  const DEFAULT_ORDER_ITEMS = [
    { Order_Item_ID: 'ITEM-401', Order_ID: 'ORD-301', Product_ID: 'PROD-201', Quantity: 1, Price: 1199.00 },
    { Order_Item_ID: 'ITEM-402', Order_ID: 'ORD-301', Product_ID: 'PROD-202', Quantity: 1, Price: 349.00 },
    { Order_Item_ID: 'ITEM-403', Order_ID: 'ORD-302', Product_ID: 'PROD-203', Quantity: 1, Price: 1799.00 },
    { Order_Item_ID: 'ITEM-404', Order_ID: 'ORD-302', Product_ID: 'PROD-208', Quantity: 1, Price: 99.00 },
    { Order_Item_ID: 'ITEM-405', Order_ID: 'ORD-303', Product_ID: 'PROD-204', Quantity: 2, Price: 130.00 },
    { Order_Item_ID: 'ITEM-406', Order_ID: 'ORD-304', Product_ID: 'PROD-205', Quantity: 1, Price: 899.00 },
    { Order_Item_ID: 'ITEM-407', Order_ID: 'ORD-305', Product_ID: 'PROD-206', Quantity: 2, Price: 65.00 },
    { Order_Item_ID: 'ITEM-408', Order_ID: 'ORD-305', Product_ID: 'PROD-207', Quantity: 1, Price: 199.00 },
    { Order_Item_ID: 'ITEM-409', Order_ID: 'ORD-306', Product_ID: 'PROD-210', Quantity: 1, Price: 149.00 },
    { Order_Item_ID: 'ITEM-410', Order_ID: 'ORD-307', Product_ID: 'PROD-202', Quantity: 1, Price: 349.00 },
    { Order_Item_ID: 'ITEM-411', Order_ID: 'ORD-307', Product_ID: 'PROD-209', Quantity: 1, Price: 149.00 },
    { Order_Item_ID: 'ITEM-412', Order_ID: 'ORD-308', Product_ID: 'PROD-207', Quantity: 1, Price: 199.00 },
    { Order_Item_ID: 'ITEM-413', Order_ID: 'ORD-303', Product_ID: 'PROD-208', Quantity: 1, Price: 99.00 },
    { Order_Item_ID: 'ITEM-414', Order_ID: 'ORD-307', Product_ID: 'PROD-206', Quantity: 1, Price: 65.00 }
  ];

  // --------------------------------------------------------------------------
  // 2. DATABASE LOCAL STORAGE REPOSITORY
  // --------------------------------------------------------------------------
  const DB_KEYS = {
    CUSTOMERS: 'dbms_ecommerce_customers',
    PRODUCTS: 'dbms_ecommerce_products',
    ORDERS: 'dbms_ecommerce_orders',
    ORDER_ITEMS: 'dbms_ecommerce_order_items',
    THEME: 'dbms_ecommerce_theme'
  };

  class DatabaseEngine {
    constructor() {
      this.init();
    }

    init() {
      if (!localStorage.getItem(DB_KEYS.CUSTOMERS)) {
        this.saveCustomers(DEFAULT_CUSTOMERS);
      }
      if (!localStorage.getItem(DB_KEYS.PRODUCTS)) {
        this.saveProducts(DEFAULT_PRODUCTS);
      }
      if (!localStorage.getItem(DB_KEYS.ORDERS)) {
        this.saveOrders(DEFAULT_ORDERS);
      }
      if (!localStorage.getItem(DB_KEYS.ORDER_ITEMS)) {
        this.saveOrderItems(DEFAULT_ORDER_ITEMS);
      }
    }

    resetAll() {
      localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify(DEFAULT_CUSTOMERS));
      localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
      localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(DEFAULT_ORDERS));
      localStorage.setItem(DB_KEYS.ORDER_ITEMS, JSON.stringify(DEFAULT_ORDER_ITEMS));
    }

    // Customers
    getCustomers() {
      try {
        return JSON.parse(localStorage.getItem(DB_KEYS.CUSTOMERS)) || [];
      } catch (e) {
        return [];
      }
    }
    saveCustomers(data) {
      localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify(data));
    }

    // Products
    getProducts() {
      try {
        return JSON.parse(localStorage.getItem(DB_KEYS.PRODUCTS)) || [];
      } catch (e) {
        return [];
      }
    }
    saveProducts(data) {
      localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(data));
    }

    // Orders
    getOrders() {
      try {
        return JSON.parse(localStorage.getItem(DB_KEYS.ORDERS)) || [];
      } catch (e) {
        return [];
      }
    }
    saveOrders(data) {
      localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(data));
    }

    // Order Items
    getOrderItems() {
      try {
        return JSON.parse(localStorage.getItem(DB_KEYS.ORDER_ITEMS)) || [];
      } catch (e) {
        return [];
      }
    }
    saveOrderItems(data) {
      localStorage.setItem(DB_KEYS.ORDER_ITEMS, JSON.stringify(data));
    }

    // Recalculate Order Total Amount from its items
    syncOrderTotal(orderId) {
      const items = this.getOrderItems().filter(i => i.Order_ID === orderId);
      const newTotal = items.reduce((sum, item) => sum + (Number(item.Quantity) * Number(item.Price)), 0);
      const orders = this.getOrders();
      const target = orders.find(o => o.Order_ID === orderId);
      if (target) {
        target.Total_Amount = parseFloat(newTotal.toFixed(2));
        this.saveOrders(orders);
      }
    }
  }

  const db = new DatabaseEngine();

  // --------------------------------------------------------------------------
  // 3. MAIN APPLICATION CONTROLLER
  // --------------------------------------------------------------------------
  class AppController {
    constructor() {
      this.currentView = 'dashboard';
      this.pendingDeleteAction = null;
      this.orderStatusChartInstance = null;
      this.categoryStockChartInstance = null;
    }

    init() {
      this.setupTheme();
      this.setupNavigation();
      this.setupEventListeners();
      this.renderAllViews();
      this.navigateTo(this.getHashPage() || 'dashboard');
    }

    // Theme (Dark / Light) Setup
    setupTheme() {
      const savedTheme = localStorage.getItem(DB_KEYS.THEME) || 'light';
      document.body.setAttribute('data-theme', savedTheme);
      this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
      const currentTheme = document.body.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem(DB_KEYS.THEME, newTheme);
      this.updateThemeIcon(newTheme);
      this.renderCharts();
      this.showToast('Theme Changed', `Switched to ${newTheme} mode`, 'info');
    }

    updateThemeIcon(theme) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }

    // Navigation and Routing
    setupNavigation() {
      window.addEventListener('hashchange', () => {
        const page = this.getHashPage();
        this.navigateTo(page || 'dashboard');
      });

      document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const page = link.getAttribute('data-page');
          if (page) {
            this.navigateTo(page);
          }
        });
      });
    }

    getHashPage() {
      return window.location.hash.replace('#', '').trim();
    }

    navigateTo(pageName) {
      const validPages = ['dashboard', 'customers', 'products', 'orders', 'order-items', 'sql-operations', 'about-project'];
      const targetPage = validPages.includes(pageName) ? pageName : 'dashboard';

      // Update active view
      document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
      });
      const targetView = document.getElementById(`view-${targetPage}`);
      if (targetView) {
        targetView.classList.add('active');
      }

      // Update sidebar active link
      document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === targetPage) {
          link.classList.add('active');
        }
      });

      this.currentView = targetPage;
      window.location.hash = `#${targetPage}`;

      // Close mobile sidebar if open
      this.closeMobileSidebar();

      // Trigger view-specific re-renders
      if (targetPage === 'dashboard') {
        this.renderDashboard();
      } else if (targetPage === 'customers') {
        this.renderCustomersTable();
      } else if (targetPage === 'products') {
        this.renderProductsTable();
      } else if (targetPage === 'orders') {
        this.renderOrdersTable();
      } else if (targetPage === 'order-items') {
        this.renderOrderItemsTable();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mobile Sidebar Drawer
    openMobileSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
      }
    }

    closeMobileSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      }
    }

    // Event Listeners
    setupEventListeners() {
      // Mobile toggle
      const mobileToggleBtn = document.getElementById('mobileToggleBtn');
      if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', () => this.openMobileSidebar());
      }
      const closeSidebarBtn = document.getElementById('closeSidebarBtn');
      if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => this.closeMobileSidebar());
      }
      const sidebarOverlay = document.getElementById('sidebarOverlay');
      if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => this.closeMobileSidebar());
      }

      // Theme toggle button
      const themeToggleBtn = document.getElementById('themeToggleBtn');
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      }

      // Reset Database Button
      const resetDbBtn = document.getElementById('resetDbBtn');
      if (resetDbBtn) {
        resetDbBtn.addEventListener('click', () => {
          if (confirm('Reset database to default sample records? Any custom additions will be restored.')) {
            db.resetAll();
            this.renderAllViews();
            this.showToast('Database Restored', 'All relational tables reset to default dataset', 'success');
          }
        });
      }

      // Export SQL Script
      const exportSqlBtn = document.getElementById('exportSqlBtn');
      if (exportSqlBtn) {
        exportSqlBtn.addEventListener('click', () => this.exportSqlScript());
      }

      // Notification toggle
      const notificationBtn = document.getElementById('notificationBtn');
      const notificationDropdown = document.getElementById('notificationDropdown');
      if (notificationBtn && notificationDropdown) {
        notificationBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          notificationDropdown.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
          if (!notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('show');
          }
        });
      }

      // Global search shortcut
      const globalSearchInput = document.getElementById('globalSearchInput');
      if (globalSearchInput) {
        globalSearchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            this.handleGlobalSearch(globalSearchInput.value.trim());
          }
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== globalSearchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          if (globalSearchInput) globalSearchInput.focus();
        }
      });

      // SQL Tabs
      document.querySelectorAll('.sql-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tabId = btn.getAttribute('data-tab');
          document.querySelectorAll('.sql-tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          if (tabId === 'tab-all') {
            document.querySelectorAll('.sql-tab-content').forEach(c => c.classList.add('active'));
          } else {
            document.querySelectorAll('.sql-tab-content').forEach(c => c.classList.remove('active'));
            const targetContent = document.getElementById(tabId);
            if (targetContent) targetContent.classList.add('active');
          }
        });
      });

      // Modal Background click to close
      document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.closeModal(modal.id);
          }
        });
      });

      // Delete confirmation button handler
      const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
      if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
          if (this.pendingDeleteAction) {
            this.pendingDeleteAction();
            this.pendingDeleteAction = null;
            this.closeModal('confirmDeleteModal');
          }
        });
      }
    }

    // Global Search Handler
    handleGlobalSearch(query) {
      if (!query) return;
      const lower = query.toLowerCase();

      // Check if it's an Order ID
      const orders = db.getOrders();
      const matchOrder = orders.find(o => o.Order_ID.toLowerCase().includes(lower));
      if (matchOrder) {
        this.navigateTo('orders');
        const input = document.getElementById('orderSearchInput');
        if (input) {
          input.value = query;
          this.filterOrders();
        }
        return;
      }

      // Check if it's a Customer
      const customers = db.getCustomers();
      const matchCust = customers.find(c => c.Customer_Name.toLowerCase().includes(lower) || c.Customer_ID.toLowerCase().includes(lower));
      if (matchCust) {
        this.navigateTo('customers');
        const input = document.getElementById('customerSearchInput');
        if (input) {
          input.value = query;
          this.filterCustomers();
        }
        return;
      }

      // Check if it's a Product
      const products = db.getProducts();
      const matchProd = products.find(p => p.Product_Name.toLowerCase().includes(lower) || p.Category.toLowerCase().includes(lower));
      if (matchProd) {
        this.navigateTo('products');
        const input = document.getElementById('productSearchInput');
        if (input) {
          input.value = query;
          this.filterProducts();
        }
        return;
      }

      this.showToast('Search Result', `No records found matching "${query}"`, 'info');
    }

    // ------------------------------------------------------------------------
    // 4. RENDERING ALL VIEWS
    // ------------------------------------------------------------------------
    renderAllViews() {
      this.updateSidebarBadges();
      this.renderDashboard();
      this.renderCustomersTable();
      this.renderProductsTable();
      this.renderOrdersTable();
      this.renderOrderItemsTable();
    }

    updateSidebarBadges() {
      const customers = db.getCustomers();
      const products = db.getProducts();
      const orders = db.getOrders();
      const items = db.getOrderItems();

      const elCust = document.getElementById('sidebarCustomerCount');
      if (elCust) elCust.textContent = customers.length;

      const elProd = document.getElementById('sidebarProductCount');
      if (elProd) elProd.textContent = products.length;

      const elOrd = document.getElementById('sidebarOrderCount');
      if (elOrd) elOrd.textContent = orders.length;

      const elItem = document.getElementById('sidebarItemCount');
      if (elItem) elItem.textContent = items.length;
    }

    // ------------------------------------------------------------------------
    // 5. DASHBOARD VIEW CONTROLLER
    // ------------------------------------------------------------------------
    renderDashboard() {
      const customers = db.getCustomers();
      const products = db.getProducts();
      const orders = db.getOrders();
      const items = db.getOrderItems();

      // Stat 1: Total Customers
      const statCustomers = document.getElementById('statTotalCustomers');
      if (statCustomers) statCustomers.textContent = customers.length;

      // Stat 2: Total Products & Categories
      const statProducts = document.getElementById('statTotalProducts');
      if (statProducts) statProducts.textContent = products.length;

      const categories = [...new Set(products.map(p => p.Category))];
      const lowStockProducts = products.filter(p => Number(p.Stock) <= 15);
      const statCategoriesCount = document.getElementById('statCategoriesCount');
      if (statCategoriesCount) {
        statCategoriesCount.textContent = `Across ${categories.length} Categories`;
      }
      const statLowStockBadge = document.getElementById('statLowStockBadge');
      if (statLowStockBadge) {
        if (lowStockProducts.length > 0) {
          statLowStockBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${lowStockProducts.length} Low Stock`;
          statLowStockBadge.className = 'stat-trend' + ' text-amber';
        } else {
          statLowStockBadge.innerHTML = `<i class="fa-solid fa-check"></i> Stock Healthy`;
          statLowStockBadge.className = 'stat-trend positive';
        }
      }

      // Stat 3: Total Orders & Revenue
      const statOrders = document.getElementById('statTotalOrders');
      if (statOrders) statOrders.textContent = orders.length;

      const totalRevenue = orders.reduce((sum, o) => sum + Number(o.Total_Amount || 0), 0);
      const statOrderRevenue = document.getElementById('statOrderRevenue');
      if (statOrderRevenue) {
        statOrderRevenue.textContent = `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }

      // Stat 4: Total Order Items & Units Sold
      const statOrderItems = document.getElementById('statTotalOrderItems');
      if (statOrderItems) statOrderItems.textContent = items.length;

      const totalUnitsSold = items.reduce((sum, item) => sum + Number(item.Quantity || 0), 0);
      const statUnitsSold = document.getElementById('statUnitsSold');
      if (statUnitsSold) {
        statUnitsSold.textContent = `${totalUnitsSold} Units Sold`;
      }

      // Render Recent Orders Table (Top 5)
      this.renderRecentOrdersTable();

      // Render Product Overview
      this.renderProductOverview();

      // Render Charts
      this.renderCharts();
    }

    renderRecentOrdersTable() {
      const orders = db.getOrders();
      const customers = db.getCustomers();
      const tbody = document.getElementById('dashboardRecentOrdersBody');
      if (!tbody) return;

      // Sort by date descending
      const sorted = [...orders].sort((a, b) => new Date(b.Order_Date) - new Date(a.Order_Date)).slice(0, 5);

      if (sorted.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 2rem; color: var(--text-muted);">No orders recorded yet.</td></tr>`;
        return;
      }

      tbody.innerHTML = sorted.map(order => {
        const customer = customers.find(c => c.Customer_ID === order.Customer_ID);
        const customerName = customer ? customer.Customer_Name : order.Customer_ID;
        const statusClass = `status-${order.Status.toLowerCase()}`;

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(order.Order_ID)}</span></td>
            <td><strong>${this.escapeHtml(customerName)}</strong></td>
            <td>${this.escapeHtml(order.Order_Date)}</td>
            <td><strong>$${Number(order.Total_Amount).toFixed(2)}</strong></td>
            <td><span class="status-badge ${statusClass}">${this.escapeHtml(order.Status)}</span></td>
            <td>
              <button class="tbl-action-btn" title="View Order Invoice" onclick="app.viewOrderDetails('${order.Order_ID}')">
                <i class="fa-solid fa-eye"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    renderProductOverview() {
      const products = db.getProducts();
      const container = document.getElementById('productOverviewContainer');
      if (!container) return;

      const categoryMap = {};
      products.forEach(p => {
        if (!categoryMap[p.Category]) {
          categoryMap[p.Category] = { count: 0, stock: 0 };
        }
        categoryMap[p.Category].count += 1;
        categoryMap[p.Category].stock += Number(p.Stock);
      });

      const colors = ['#6366f1', '#06b6d4', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899', '#3b82f6'];
      let colorIndex = 0;

      let html = '<div class="category-breakdown-list">';
      for (const [cat, data] of Object.entries(categoryMap)) {
        const dotColor = colors[colorIndex % colors.length];
        colorIndex++;
        html += `
          <div class="category-stat-row">
            <div class="cat-info">
              <span class="cat-color-dot" style="background: ${dotColor};"></span>
              <span class="cat-name">${this.escapeHtml(cat)}</span>
            </div>
            <div class="cat-metrics">
              <span class="cat-count">${data.count} Products</span>
              <span class="cat-stock">${data.stock} in Stock</span>
            </div>
          </div>
        `;
      }
      html += '</div>';

      const lowStockProducts = products.filter(p => Number(p.Stock) <= 15);
      if (lowStockProducts.length > 0) {
        const names = lowStockProducts.slice(0, 2).map(p => p.Product_Name).join(', ');
        const extra = lowStockProducts.length > 2 ? ` and ${lowStockProducts.length - 2} more` : '';
        html += `
          <div class="stock-alert-banner">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div class="stock-alert-text">
              <strong>Warehouse Reorder Notice</strong>
              <span>${this.escapeHtml(names)}${extra} have fallen below 15 units.</span>
            </div>
          </div>
        `;
      }

      container.innerHTML = html;
    }

    // Chart.js Visualizations
    renderCharts() {
      if (typeof Chart === 'undefined') {
        return;
      }

      const isDark = document.body.getAttribute('data-theme') === 'dark';
      const textColor = isDark ? '#94a3b8' : '#64748b';
      const gridColor = isDark ? '#1e293b' : '#f1f5f9';

      // 1. Order Status Doughnut Chart
      const orders = db.getOrders();
      const statusCounts = {
        Pending: 0,
        Processing: 0,
        Shipped: 0,
        Delivered: 0,
        Cancelled: 0
      };
      orders.forEach(o => {
        if (statusCounts[o.Status] !== undefined) {
          statusCounts[o.Status]++;
        }
      });

      const statusCanvas = document.getElementById('orderStatusChart');
      if (statusCanvas) {
        if (this.orderStatusChartInstance) {
          this.orderStatusChartInstance.destroy();
        }

        const ctx = statusCanvas.getContext('2d');
        this.orderStatusChartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: Object.keys(statusCounts),
            datasets: [{
              data: Object.values(statusCounts),
              backgroundColor: [
                '#f59e0b', // Pending (Amber)
                '#3b82f6', // Processing (Blue)
                '#6366f1', // Shipped (Indigo)
                '#10b981', // Delivered (Emerald)
                '#f43f5e'  // Cancelled (Rose)
              ],
              borderWidth: 2,
              borderColor: isDark ? '#111827' : '#ffffff'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: textColor,
                  padding: 14,
                  font: { family: 'Plus Jakarta Sans', size: 12, weight: '500' }
                }
              }
            },
            cutout: '70%'
          }
        });
      }

      // 2. Category Stock Bar Chart
      const products = db.getProducts();
      const categoryStock = {};
      products.forEach(p => {
        categoryStock[p.Category] = (categoryStock[p.Category] || 0) + Number(p.Stock);
      });

      const categoryCanvas = document.getElementById('categoryStockChart');
      if (categoryCanvas) {
        if (this.categoryStockChartInstance) {
          this.categoryStockChartInstance.destroy();
        }

        const ctx2 = categoryCanvas.getContext('2d');
        const gradient = ctx2.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#a855f7');

        this.categoryStockChartInstance = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: Object.keys(categoryStock),
            datasets: [{
              label: 'Stock Units',
              data: Object.values(categoryStock),
              backgroundColor: gradient,
              borderRadius: 6,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
              },
              y: {
                grid: { color: gridColor },
                ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } },
                beginAtZero: true
              }
            }
          }
        });
      }
    }

    // ------------------------------------------------------------------------
    // 6. CUSTOMERS MANAGEMENT
    // ------------------------------------------------------------------------
    renderCustomersTable() {
      const customers = db.getCustomers();
      const orders = db.getOrders();
      const tbody = document.getElementById('customersTableBody');
      const footer = document.getElementById('customerTableFooter');
      const badge = document.getElementById('customerCountBadge');
      if (!tbody) return;

      const orderCountByCust = {};
      orders.forEach(o => {
        orderCountByCust[o.Customer_ID] = (orderCountByCust[o.Customer_ID] || 0) + 1;
      });

      if (badge) badge.textContent = `Showing ${customers.length} records`;

      if (customers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No customer records found. Click "+ Add Customer" to create one.</td></tr>`;
        if (footer) footer.innerHTML = `<span>0 records</span>`;
        return;
      }

      tbody.innerHTML = customers.map(c => {
        const orderCount = orderCountByCust[c.Customer_ID] || 0;
        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(c.Customer_ID)}</span></td>
            <td><strong>${this.escapeHtml(c.Customer_Name)}</strong></td>
            <td><a href="mailto:${this.escapeHtml(c.Email)}" style="color: var(--primary-600);">${this.escapeHtml(c.Email)}</a></td>
            <td>${this.escapeHtml(c.Phone)}</td>
            <td style="max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${this.escapeHtml(c.Address)}">${this.escapeHtml(c.Address)}</td>
            <td><span class="badge-tag">${orderCount} Orders</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Customer Details" onclick="app.viewCustomerDetails('${c.Customer_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Customer" onclick="app.openEditCustomerModal('${c.Customer_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Customer" onclick="app.confirmDeleteCustomer('${c.Customer_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      if (footer) {
        footer.innerHTML = `<span>Total: <strong>${customers.length} Customers</strong></span><span>Relational Table: <code>CUSTOMER</code></span>`;
      }
    }

    filterCustomers() {
      const search = (document.getElementById('customerSearchInput')?.value || '').toLowerCase().trim();
      const customers = db.getCustomers();
      const orders = db.getOrders();
      const tbody = document.getElementById('customersTableBody');
      const badge = document.getElementById('customerCountBadge');
      if (!tbody) return;

      const filtered = customers.filter(c => 
        c.Customer_ID.toLowerCase().includes(search) ||
        c.Customer_Name.toLowerCase().includes(search) ||
        c.Email.toLowerCase().includes(search) ||
        c.Phone.toLowerCase().includes(search) ||
        c.Address.toLowerCase().includes(search)
      );

      if (badge) badge.textContent = `Showing ${filtered.length} of ${customers.length} records`;

      const orderCountByCust = {};
      orders.forEach(o => {
        orderCountByCust[o.Customer_ID] = (orderCountByCust[o.Customer_ID] || 0) + 1;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No customers matching "${this.escapeHtml(search)}".</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(c => {
        const orderCount = orderCountByCust[c.Customer_ID] || 0;
        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(c.Customer_ID)}</span></td>
            <td><strong>${this.escapeHtml(c.Customer_Name)}</strong></td>
            <td><a href="mailto:${this.escapeHtml(c.Email)}" style="color: var(--primary-600);">${this.escapeHtml(c.Email)}</a></td>
            <td>${this.escapeHtml(c.Phone)}</td>
            <td style="max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${this.escapeHtml(c.Address)}">${this.escapeHtml(c.Address)}</td>
            <td><span class="badge-tag">${orderCount} Orders</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Customer Details" onclick="app.viewCustomerDetails('${c.Customer_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Customer" onclick="app.openEditCustomerModal('${c.Customer_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Customer" onclick="app.confirmDeleteCustomer('${c.Customer_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    openAddCustomerModal() {
      document.getElementById('customerFormMode').value = 'add';
      document.getElementById('customerModalTitle').innerHTML = '<i class="fa-solid fa-user-plus"></i> Add New Customer';
      document.getElementById('custInputId').disabled = false;

      // Suggest next ID
      const customers = db.getCustomers();
      const nextNum = customers.length + 101;
      document.getElementById('custInputId').value = `CUST-${nextNum}`;
      document.getElementById('custInputName').value = '';
      document.getElementById('custInputEmail').value = '';
      document.getElementById('custInputPhone').value = '';
      document.getElementById('custInputAddress').value = '';

      this.openModal('customerModal');
    }

    openEditCustomerModal(customerId) {
      const customers = db.getCustomers();
      const customer = customers.find(c => c.Customer_ID === customerId);
      if (!customer) return;

      document.getElementById('customerFormMode').value = 'edit';
      document.getElementById('customerModalTitle').innerHTML = '<i class="fa-solid fa-user-pen"></i> Edit Customer Details';
      
      const idInput = document.getElementById('custInputId');
      idInput.value = customer.Customer_ID;
      idInput.disabled = true; // Primary Key cannot be altered directly

      document.getElementById('custInputName').value = customer.Customer_Name;
      document.getElementById('custInputEmail').value = customer.Email;
      document.getElementById('custInputPhone').value = customer.Phone;
      document.getElementById('custInputAddress').value = customer.Address;

      this.openModal('customerModal');
    }

    handleCustomerSubmit(e) {
      e.preventDefault();
      const mode = document.getElementById('customerFormMode').value;
      const id = document.getElementById('custInputId').value.trim();
      const name = document.getElementById('custInputName').value.trim();
      const email = document.getElementById('custInputEmail').value.trim();
      const phone = document.getElementById('custInputPhone').value.trim();
      const address = document.getElementById('custInputAddress').value.trim();

      const customers = db.getCustomers();

      if (mode === 'add') {
        if (customers.some(c => c.Customer_ID === id)) {
          this.showToast('Primary Key Error', `Customer ID "${id}" already exists. Primary keys must be unique.`, 'danger');
          return;
        }
        customers.push({ Customer_ID: id, Customer_Name: name, Email: email, Phone: phone, Address: address });
        db.saveCustomers(customers);
        this.showToast('Customer Created', `Customer ${name} (${id}) added to database.`, 'success');
      } else {
        const index = customers.findIndex(c => c.Customer_ID === id);
        if (index !== -1) {
          customers[index] = { Customer_ID: id, Customer_Name: name, Email: email, Phone: phone, Address: address };
          db.saveCustomers(customers);
          this.showToast('Customer Updated', `Customer details for ${id} updated.`, 'success');
        }
      }

      this.closeModal('customerModal');
      this.renderCustomersTable();
      this.updateSidebarBadges();
      this.renderDashboard();
    }

    viewCustomerDetails(customerId) {
      const customer = db.getCustomers().find(c => c.Customer_ID === customerId);
      if (!customer) return;

      const customerOrders = db.getOrders().filter(o => o.Customer_ID === customerId);

      let ordersHtml = '';
      if (customerOrders.length > 0) {
        ordersHtml = `
          <h4 style="margin: 1.5rem 0 0.75rem; font-size: 0.95rem; font-weight: 700;">
            <i class="fa-solid fa-cart-shopping text-purple"></i> Relational Orders (FK Linked)
          </h4>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${customerOrders.map(o => `
                  <tr>
                    <td><span class="pk-badge">${this.escapeHtml(o.Order_ID)}</span></td>
                    <td>${this.escapeHtml(o.Order_Date)}</td>
                    <td><strong>$${Number(o.Total_Amount).toFixed(2)}</strong></td>
                    <td><span class="status-badge status-${o.Status.toLowerCase()}">${this.escapeHtml(o.Status)}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else {
        ordersHtml = `<p style="margin-top: 1.5rem; color: var(--text-muted); font-size: 0.85rem;"><i class="fa-solid fa-info-circle"></i> No orders placed by this customer yet.</p>`;
      }

      const modalBody = document.getElementById('viewModalBody');
      const modalTitle = document.getElementById('viewModalTitle');
      modalTitle.innerHTML = `<i class="fa-solid fa-user"></i> Customer Profile: ${this.escapeHtml(customer.Customer_Name)}`;

      modalBody.innerHTML = `
        <div class="detail-profile-header">
          <div class="detail-avatar"><i class="fa-solid fa-user"></i></div>
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 700;">${this.escapeHtml(customer.Customer_Name)}</h3>
            <span class="pk-badge">${this.escapeHtml(customer.Customer_ID)}</span>
          </div>
        </div>
        <div class="detail-grid">
          <div class="detail-item">
            <span>Email Address</span>
            <strong>${this.escapeHtml(customer.Email)}</strong>
          </div>
          <div class="detail-item">
            <span>Phone Number</span>
            <strong>${this.escapeHtml(customer.Phone)}</strong>
          </div>
          <div class="detail-item" style="grid-column: 1 / -1;">
            <span>Delivery Address</span>
            <strong>${this.escapeHtml(customer.Address)}</strong>
          </div>
        </div>
        ${ordersHtml}
      `;

      this.openModal('viewDetailsModal');
    }

    confirmDeleteCustomer(customerId) {
      const orders = db.getOrders().filter(o => o.Customer_ID === customerId);
      const msg = document.getElementById('deleteModalMessage');
      const warningBox = document.getElementById('deleteFkWarning');
      const warningText = document.getElementById('deleteFkDetails');

      msg.textContent = `Are you sure you want to delete Customer record "${customerId}"?`;

      if (orders.length > 0) {
        warningBox.style.display = 'flex';
        warningText.innerHTML = `This customer has <strong>${orders.length} active order(s)</strong> in the <code>ORDERS</code> table. In SQL, this violates the <code>ON DELETE RESTRICT</code> foreign key constraint. Deleting will cascade or violate relational integrity.`;
      } else {
        warningBox.style.display = 'none';
      }

      this.pendingDeleteAction = () => {
        let customers = db.getCustomers();
        customers = customers.filter(c => c.Customer_ID !== customerId);
        db.saveCustomers(customers);

        this.showToast('Customer Deleted', `Customer ${customerId} removed from database.`, 'warning');
        this.renderCustomersTable();
        this.updateSidebarBadges();
        this.renderDashboard();
      };

      this.openModal('confirmDeleteModal');
    }

    // ------------------------------------------------------------------------
    // 7. PRODUCTS MANAGEMENT
    // ------------------------------------------------------------------------
    renderProductsTable() {
      const products = db.getProducts();
      const tbody = document.getElementById('productsTableBody');
      const footer = document.getElementById('productTableFooter');
      const badge = document.getElementById('productCountBadge');
      const catFilter = document.getElementById('productCategoryFilter');
      if (!tbody) return;

      // Populate Category filter options
      if (catFilter) {
        const currentCat = catFilter.value;
        const categories = [...new Set(products.map(p => p.Category))];
        catFilter.innerHTML = '<option value="">All Categories</option>' + 
          categories.map(c => `<option value="${this.escapeHtml(c)}" ${c === currentCat ? 'selected' : ''}>${this.escapeHtml(c)}</option>`).join('');
      }

      if (badge) badge.textContent = `Showing ${products.length} records`;

      if (products.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No products in catalog. Click "+ Add Product" to add.</td></tr>`;
        if (footer) footer.innerHTML = `<span>0 records</span>`;
        return;
      }

      tbody.innerHTML = products.map(p => {
        let stockClass = 'stock-in';
        let stockLabel = `${p.Stock} Units`;
        if (Number(p.Stock) === 0) {
          stockClass = 'stock-out';
          stockLabel = 'Out of Stock (0)';
        } else if (Number(p.Stock) <= 15) {
          stockClass = 'stock-low';
          stockLabel = `Low Stock (${p.Stock})`;
        }

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(p.Product_ID)}</span></td>
            <td><strong>${this.escapeHtml(p.Product_Name)}</strong></td>
            <td><span class="badge-tag">${this.escapeHtml(p.Category)}</span></td>
            <td><strong>$${Number(p.Price).toFixed(2)}</strong></td>
            <td><span class="stock-pill ${stockClass}">${stockLabel}</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Product Details" onclick="app.viewProductDetails('${p.Product_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Product" onclick="app.openEditProductModal('${p.Product_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Product" onclick="app.confirmDeleteProduct('${p.Product_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      if (footer) {
        footer.innerHTML = `<span>Total: <strong>${products.length} Products</strong></span><span>Relational Table: <code>PRODUCT</code></span>`;
      }
    }

    filterProducts() {
      const search = (document.getElementById('productSearchInput')?.value || '').toLowerCase().trim();
      const catVal = document.getElementById('productCategoryFilter')?.value || '';
      const stockVal = document.getElementById('productStockFilter')?.value || '';
      const products = db.getProducts();
      const tbody = document.getElementById('productsTableBody');
      const badge = document.getElementById('productCountBadge');
      if (!tbody) return;

      const filtered = products.filter(p => {
        const matchesSearch = p.Product_ID.toLowerCase().includes(search) ||
          p.Product_Name.toLowerCase().includes(search) ||
          p.Category.toLowerCase().includes(search);
        
        const matchesCat = !catVal || p.Category === catVal;

        let matchesStock = true;
        const stockNum = Number(p.Stock);
        if (stockVal === 'in_stock') matchesStock = stockNum > 15;
        if (stockVal === 'low_stock') matchesStock = stockNum > 0 && stockNum <= 15;
        if (stockVal === 'out_of_stock') matchesStock = stockNum === 0;

        return matchesSearch && matchesCat && matchesStock;
      });

      if (badge) badge.textContent = `Showing ${filtered.length} of ${products.length} records`;

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No products matching selected filters.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(p => {
        let stockClass = 'stock-in';
        let stockLabel = `${p.Stock} Units`;
        if (Number(p.Stock) === 0) {
          stockClass = 'stock-out';
          stockLabel = 'Out of Stock (0)';
        } else if (Number(p.Stock) <= 15) {
          stockClass = 'stock-low';
          stockLabel = `Low Stock (${p.Stock})`;
        }

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(p.Product_ID)}</span></td>
            <td><strong>${this.escapeHtml(p.Product_Name)}</strong></td>
            <td><span class="badge-tag">${this.escapeHtml(p.Category)}</span></td>
            <td><strong>$${Number(p.Price).toFixed(2)}</strong></td>
            <td><span class="stock-pill ${stockClass}">${stockLabel}</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Product Details" onclick="app.viewProductDetails('${p.Product_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Product" onclick="app.openEditProductModal('${p.Product_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Product" onclick="app.confirmDeleteProduct('${p.Product_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    openAddProductModal() {
      document.getElementById('productFormMode').value = 'add';
      document.getElementById('productModalTitle').innerHTML = '<i class="fa-solid fa-box-open"></i> Add New Product';
      
      const idInput = document.getElementById('prodInputId');
      idInput.disabled = false;
      const products = db.getProducts();
      idInput.value = `PROD-${products.length + 201}`;

      document.getElementById('prodInputName').value = '';
      document.getElementById('prodInputCategory').value = 'Electronics';
      document.getElementById('prodInputPrice').value = '99.99';
      document.getElementById('prodInputStock').value = '25';

      this.openModal('productModal');
    }

    openEditProductModal(productId) {
      const products = db.getProducts();
      const product = products.find(p => p.Product_ID === productId);
      if (!product) return;

      document.getElementById('productFormMode').value = 'edit';
      document.getElementById('productModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Product';

      const idInput = document.getElementById('prodInputId');
      idInput.value = product.Product_ID;
      idInput.disabled = true;

      document.getElementById('prodInputName').value = product.Product_Name;
      document.getElementById('prodInputCategory').value = product.Category;
      document.getElementById('prodInputPrice').value = product.Price;
      document.getElementById('prodInputStock').value = product.Stock;

      this.openModal('productModal');
    }

    handleProductSubmit(e) {
      e.preventDefault();
      const mode = document.getElementById('productFormMode').value;
      const id = document.getElementById('prodInputId').value.trim();
      const name = document.getElementById('prodInputName').value.trim();
      const category = document.getElementById('prodInputCategory').value.trim();
      const price = parseFloat(document.getElementById('prodInputPrice').value);
      const stock = parseInt(document.getElementById('prodInputStock').value, 10);

      const products = db.getProducts();

      if (mode === 'add') {
        if (products.some(p => p.Product_ID === id)) {
          this.showToast('Primary Key Error', `Product ID "${id}" already exists.`, 'danger');
          return;
        }
        products.push({ Product_ID: id, Product_Name: name, Category: category, Price: price, Stock: stock });
        db.saveProducts(products);
        this.showToast('Product Added', `Product "${name}" saved to catalog.`, 'success');
      } else {
        const index = products.findIndex(p => p.Product_ID === id);
        if (index !== -1) {
          products[index] = { Product_ID: id, Product_Name: name, Category: category, Price: price, Stock: stock };
          db.saveProducts(products);
          this.showToast('Product Updated', `Product ${id} modified successfully.`, 'success');
        }
      }

      this.closeModal('productModal');
      this.renderProductsTable();
      this.updateSidebarBadges();
      this.renderDashboard();
    }

    viewProductDetails(productId) {
      const product = db.getProducts().find(p => p.Product_ID === productId);
      if (!product) return;

      const orderItems = db.getOrderItems().filter(i => i.Product_ID === productId);

      const modalTitle = document.getElementById('viewModalTitle');
      const modalBody = document.getElementById('viewModalBody');
      modalTitle.innerHTML = `<i class="fa-solid fa-box-open"></i> Product Details: ${this.escapeHtml(product.Product_Name)}`;

      modalBody.innerHTML = `
        <div class="detail-profile-header">
          <div class="detail-avatar bg-emerald"><i class="fa-solid fa-box"></i></div>
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 700;">${this.escapeHtml(product.Product_Name)}</h3>
            <span class="pk-badge">${this.escapeHtml(product.Product_ID)}</span>
          </div>
        </div>
        <div class="detail-grid">
          <div class="detail-item">
            <span>Category</span>
            <strong>${this.escapeHtml(product.Category)}</strong>
          </div>
          <div class="detail-item">
            <span>Unit Price</span>
            <strong>$${Number(product.Price).toFixed(2)}</strong>
          </div>
          <div class="detail-item">
            <span>Warehouse Stock</span>
            <strong>${product.Stock} Units</strong>
          </div>
          <div class="detail-item">
            <span>Times Ordered (Bridge Rows)</span>
            <strong>${orderItems.length} Order Line(s)</strong>
          </div>
        </div>
      `;

      this.openModal('viewDetailsModal');
    }

    confirmDeleteProduct(productId) {
      const items = db.getOrderItems().filter(i => i.Product_ID === productId);
      const msg = document.getElementById('deleteModalMessage');
      const warningBox = document.getElementById('deleteFkWarning');
      const warningText = document.getElementById('deleteFkDetails');

      msg.textContent = `Are you sure you want to delete Product "${productId}"?`;

      if (items.length > 0) {
        warningBox.style.display = 'flex';
        warningText.innerHTML = `This product is currently referenced by <strong>${items.length} item(s)</strong> in the <code>ORDER_ITEM</code> associative table. In SQL, this triggers a foreign key constraint violation.`;
      } else {
        warningBox.style.display = 'none';
      }

      this.pendingDeleteAction = () => {
        let products = db.getProducts();
        products = products.filter(p => p.Product_ID !== productId);
        db.saveProducts(products);

        this.showToast('Product Removed', `Product ${productId} deleted.`, 'warning');
        this.renderProductsTable();
        this.updateSidebarBadges();
        this.renderDashboard();
      };

      this.openModal('confirmDeleteModal');
    }

    // ------------------------------------------------------------------------
    // 8. ORDERS MANAGEMENT
    // ------------------------------------------------------------------------
    renderOrdersTable() {
      const orders = db.getOrders();
      const customers = db.getCustomers();
      const tbody = document.getElementById('ordersTableBody');
      const footer = document.getElementById('orderTableFooter');
      const badge = document.getElementById('orderCountBadge');
      if (!tbody) return;

      if (badge) badge.textContent = `Showing ${orders.length} records`;

      if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No orders recorded yet. Click "+ Create Order" to place one.</td></tr>`;
        if (footer) footer.innerHTML = `<span>0 records</span>`;
        return;
      }

      tbody.innerHTML = orders.map(o => {
        const cust = customers.find(c => c.Customer_ID === o.Customer_ID);
        const custName = cust ? cust.Customer_Name : 'Unknown Customer';
        const statusClass = `status-${o.Status.toLowerCase()}`;

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(o.Order_ID)}</span></td>
            <td>
              <span class="fk-badge" title="Foreign Key references CUSTOMER">${this.escapeHtml(o.Customer_ID)}</span>
              <span style="margin-left: 0.35rem; font-weight: 500;">${this.escapeHtml(custName)}</span>
            </td>
            <td>${this.escapeHtml(o.Order_Date)}</td>
            <td><strong>$${Number(o.Total_Amount).toFixed(2)}</strong></td>
            <td><span class="status-badge ${statusClass}">${this.escapeHtml(o.Status)}</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Full Order Invoice" onclick="app.viewOrderDetails('${o.Order_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Order" onclick="app.openEditOrderModal('${o.Order_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Order" onclick="app.confirmDeleteOrder('${o.Order_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      if (footer) {
        footer.innerHTML = `<span>Total: <strong>${orders.length} Orders</strong></span><span>Relational Table: <code>ORDERS</code></span>`;
      }
    }

    filterOrders() {
      const search = (document.getElementById('orderSearchInput')?.value || '').toLowerCase().trim();
      const statusVal = document.getElementById('orderStatusFilter')?.value || '';
      const orders = db.getOrders();
      const customers = db.getCustomers();
      const tbody = document.getElementById('ordersTableBody');
      const badge = document.getElementById('orderCountBadge');
      if (!tbody) return;

      const filtered = orders.filter(o => {
        const cust = customers.find(c => c.Customer_ID === o.Customer_ID);
        const custName = cust ? cust.Customer_Name.toLowerCase() : '';
        const matchesSearch = o.Order_ID.toLowerCase().includes(search) ||
          o.Customer_ID.toLowerCase().includes(search) ||
          custName.includes(search);
        const matchesStatus = !statusVal || o.Status === statusVal;
        return matchesSearch && matchesStatus;
      });

      if (badge) badge.textContent = `Showing ${filtered.length} of ${orders.length} records`;

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No orders matching search or status filter.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(o => {
        const cust = customers.find(c => c.Customer_ID === o.Customer_ID);
        const custName = cust ? cust.Customer_Name : 'Unknown Customer';
        const statusClass = `status-${o.Status.toLowerCase()}`;

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(o.Order_ID)}</span></td>
            <td>
              <span class="fk-badge">${this.escapeHtml(o.Customer_ID)}</span>
              <span style="margin-left: 0.35rem; font-weight: 500;">${this.escapeHtml(custName)}</span>
            </td>
            <td>${this.escapeHtml(o.Order_Date)}</td>
            <td><strong>$${Number(o.Total_Amount).toFixed(2)}</strong></td>
            <td><span class="status-badge ${statusClass}">${this.escapeHtml(o.Status)}</span></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="View Full Order Invoice" onclick="app.viewOrderDetails('${o.Order_ID}')">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="tbl-action-btn" title="Edit Order" onclick="app.openEditOrderModal('${o.Order_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Order" onclick="app.confirmDeleteOrder('${o.Order_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    openAddOrderModal() {
      document.getElementById('orderFormMode').value = 'add';
      document.getElementById('orderModalTitle').innerHTML = '<i class="fa-solid fa-cart-plus"></i> Create New Order';

      const idInput = document.getElementById('ordInputId');
      idInput.disabled = false;
      const orders = db.getOrders();
      idInput.value = `ORD-${orders.length + 301}`;

      // Populate Customers dropdown (Referential Integrity)
      const custSelect = document.getElementById('ordInputCustomer');
      const customers = db.getCustomers();
      custSelect.innerHTML = customers.map(c => `
        <option value="${this.escapeHtml(c.Customer_ID)}">${this.escapeHtml(c.Customer_ID)} - ${this.escapeHtml(c.Customer_Name)}</option>
      `).join('');

      // Today's date
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('ordInputDate').value = today;
      document.getElementById('ordInputStatus').value = 'Pending';
      document.getElementById('ordInputTotal').value = '0.00';

      this.openModal('orderModal');
    }

    openEditOrderModal(orderId) {
      const orders = db.getOrders();
      const order = orders.find(o => o.Order_ID === orderId);
      if (!order) return;

      document.getElementById('orderFormMode').value = 'edit';
      document.getElementById('orderModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Order Status &amp; Details';

      const idInput = document.getElementById('ordInputId');
      idInput.value = order.Order_ID;
      idInput.disabled = true;

      const custSelect = document.getElementById('ordInputCustomer');
      const customers = db.getCustomers();
      custSelect.innerHTML = customers.map(c => `
        <option value="${this.escapeHtml(c.Customer_ID)}" ${c.Customer_ID === order.Customer_ID ? 'selected' : ''}>
          ${this.escapeHtml(c.Customer_ID)} - ${this.escapeHtml(c.Customer_Name)}
        </option>
      `).join('');

      document.getElementById('ordInputDate').value = order.Order_Date;
      document.getElementById('ordInputStatus').value = order.Status;
      document.getElementById('ordInputTotal').value = order.Total_Amount;

      this.openModal('orderModal');
    }

    handleOrderSubmit(e) {
      e.preventDefault();
      const mode = document.getElementById('orderFormMode').value;
      const id = document.getElementById('ordInputId').value.trim();
      const customerId = document.getElementById('ordInputCustomer').value;
      const date = document.getElementById('ordInputDate').value;
      const status = document.getElementById('ordInputStatus').value;
      const total = parseFloat(document.getElementById('ordInputTotal').value) || 0;

      const orders = db.getOrders();

      if (mode === 'add') {
        if (orders.some(o => o.Order_ID === id)) {
          this.showToast('Primary Key Error', `Order ID "${id}" already exists.`, 'danger');
          return;
        }
        orders.push({ Order_ID: id, Customer_ID: customerId, Order_Date: date, Total_Amount: total, Status: status });
        db.saveOrders(orders);
        this.showToast('Order Created', `Order ${id} registered for customer ${customerId}.`, 'success');
      } else {
        const index = orders.findIndex(o => o.Order_ID === id);
        if (index !== -1) {
          orders[index] = { Order_ID: id, Customer_ID: customerId, Order_Date: date, Total_Amount: total, Status: status };
          db.saveOrders(orders);
          this.showToast('Order Updated', `Order ${id} status set to ${status}.`, 'success');
        }
      }

      this.closeModal('orderModal');
      this.renderOrdersTable();
      this.updateSidebarBadges();
      this.renderDashboard();
    }

    viewOrderDetails(orderId) {
      const order = db.getOrders().find(o => o.Order_ID === orderId);
      if (!order) return;

      const customer = db.getCustomers().find(c => c.Customer_ID === order.Customer_ID);
      const items = db.getOrderItems().filter(i => i.Order_ID === orderId);
      const products = db.getProducts();

      const modalTitle = document.getElementById('viewModalTitle');
      const modalBody = document.getElementById('viewModalBody');

      modalTitle.innerHTML = `<i class="fa-solid fa-receipt"></i> Order Invoice: ${this.escapeHtml(order.Order_ID)}`;

      let itemsRows = '';
      let calculatedTotal = 0;

      if (items.length > 0) {
        itemsRows = items.map(item => {
          const product = products.find(p => p.Product_ID === item.Product_ID);
          const prodName = product ? product.Product_Name : item.Product_ID;
          const subtotal = Number(item.Quantity) * Number(item.Price);
          calculatedTotal += subtotal;

          return `
            <tr>
              <td><span class="pk-badge">${this.escapeHtml(item.Order_Item_ID)}</span></td>
              <td><strong>${this.escapeHtml(prodName)}</strong><br><small style="color: var(--text-muted);">${this.escapeHtml(item.Product_ID)}</small></td>
              <td>${item.Quantity}</td>
              <td>$${Number(item.Price).toFixed(2)}</td>
              <td><strong>$${subtotal.toFixed(2)}</strong></td>
            </tr>
          `;
        }).join('');
      } else {
        itemsRows = `<tr><td colspan="5" class="text-center" style="padding: 1.5rem; color: var(--text-muted);">No line items attached to this order yet.</td></tr>`;
      }

      modalBody.innerHTML = `
        <div class="detail-profile-header">
          <div class="detail-avatar bg-purple"><i class="fa-solid fa-cart-shopping"></i></div>
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700;">Order ${this.escapeHtml(order.Order_ID)}</h3>
            <span class="status-badge status-${order.Status.toLowerCase()}">${this.escapeHtml(order.Status)}</span>
          </div>
        </div>

        <div class="detail-grid">
          <div class="detail-item">
            <span>Customer Name (FK)</span>
            <strong>${this.escapeHtml(customer ? customer.Customer_Name : order.Customer_ID)}</strong>
          </div>
          <div class="detail-item">
            <span>Order Date</span>
            <strong>${this.escapeHtml(order.Order_Date)}</strong>
          </div>
          <div class="detail-item">
            <span>Shipping Address</span>
            <strong>${this.escapeHtml(customer ? customer.Address : 'N/A')}</strong>
          </div>
          <div class="detail-item">
            <span>Customer Contact</span>
            <strong>${this.escapeHtml(customer ? customer.Phone : 'N/A')}</strong>
          </div>
        </div>

        <h4 style="margin: 1.5rem 0 0.75rem; font-size: 0.95rem; font-weight: 700;">
          <i class="fa-solid fa-boxes-stacked text-cyan"></i> Order Line Items (ORDER_ITEM Associative Entity)
        </h4>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Product Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
            </tbody>
          </table>
        </div>

        <div style="margin-top: 1.25rem; padding: 1rem 1.25rem; background: var(--bg-subtle); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.9rem; font-weight: 600;">Total Order Amount:</span>
          <span style="font-size: 1.35rem; font-weight: 800; color: var(--primary-600); font-family: var(--font-mono);">
            $${Number(order.Total_Amount).toFixed(2)}
          </span>
        </div>
      `;

      this.openModal('viewDetailsModal');
    }

    confirmDeleteOrder(orderId) {
      const items = db.getOrderItems().filter(i => i.Order_ID === orderId);
      const msg = document.getElementById('deleteModalMessage');
      const warningBox = document.getElementById('deleteFkWarning');
      const warningText = document.getElementById('deleteFkDetails');

      msg.textContent = `Are you sure you want to delete Order "${orderId}"?`;

      if (items.length > 0) {
        warningBox.style.display = 'flex';
        warningText.innerHTML = `This order contains <strong>${items.length} child item(s)</strong> in the <code>ORDER_ITEM</code> table. Deleting this order will simulate <code>ON DELETE CASCADE</code> and remove all associated order items.`;
      } else {
        warningBox.style.display = 'none';
      }

      this.pendingDeleteAction = () => {
        // Cascade delete child items
        let allItems = db.getOrderItems();
        allItems = allItems.filter(i => i.Order_ID !== orderId);
        db.saveOrderItems(allItems);

        // Delete order
        let orders = db.getOrders();
        orders = orders.filter(o => o.Order_ID !== orderId);
        db.saveOrders(orders);

        this.showToast('Order Deleted', `Order ${orderId} and child items deleted via CASCADE.`, 'warning');
        this.renderOrdersTable();
        this.renderOrderItemsTable();
        this.updateSidebarBadges();
        this.renderDashboard();
      };

      this.openModal('confirmDeleteModal');
    }

    // ------------------------------------------------------------------------
    // 9. ORDER ITEMS MANAGEMENT
    // ------------------------------------------------------------------------
    renderOrderItemsTable() {
      const items = db.getOrderItems();
      const products = db.getProducts();
      const orders = db.getOrders();
      const tbody = document.getElementById('orderItemsTableBody');
      const footer = document.getElementById('orderItemTableFooter');
      const badge = document.getElementById('orderItemCountBadge');
      const orderFilter = document.getElementById('orderItemOrderFilter');
      if (!tbody) return;

      // Populate Order filter
      if (orderFilter) {
        const currentOrder = orderFilter.value;
        const orderIds = [...new Set(items.map(i => i.Order_ID))];
        orderFilter.innerHTML = '<option value="">All Orders</option>' + 
          orderIds.map(id => `<option value="${this.escapeHtml(id)}" ${id === currentOrder ? 'selected' : ''}>Filter: ${this.escapeHtml(id)}</option>`).join('');
      }

      if (badge) badge.textContent = `Showing ${items.length} records`;

      if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No order items found. Click "+ Add Order Item" to link an item.</td></tr>`;
        if (footer) footer.innerHTML = `<span>0 records</span>`;
        return;
      }

      tbody.innerHTML = items.map(item => {
        const prod = products.find(p => p.Product_ID === item.Product_ID);
        const prodName = prod ? prod.Product_Name : 'Unknown Product';
        const subtotal = Number(item.Quantity) * Number(item.Price);

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(item.Order_Item_ID)}</span></td>
            <td><span class="fk-badge">${this.escapeHtml(item.Order_ID)}</span></td>
            <td>
              <span class="fk-badge">${this.escapeHtml(item.Product_ID)}</span>
              <span style="margin-left: 0.35rem; font-weight: 500;">${this.escapeHtml(prodName)}</span>
            </td>
            <td><strong>${item.Quantity}</strong></td>
            <td>$${Number(item.Price).toFixed(2)}</td>
            <td><strong>$${subtotal.toFixed(2)}</strong></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="Edit Order Item" onclick="app.openEditOrderItemModal('${item.Order_Item_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Order Item" onclick="app.confirmDeleteOrderItem('${item.Order_Item_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      if (footer) {
        footer.innerHTML = `<span>Total: <strong>${items.length} Order Items</strong></span><span>Associative Table: <code>ORDER_ITEM</code></span>`;
      }
    }

    filterOrderItems() {
      const search = (document.getElementById('orderItemSearchInput')?.value || '').toLowerCase().trim();
      const orderFilterVal = document.getElementById('orderItemOrderFilter')?.value || '';
      const items = db.getOrderItems();
      const products = db.getProducts();
      const tbody = document.getElementById('orderItemsTableBody');
      const badge = document.getElementById('orderItemCountBadge');
      if (!tbody) return;

      const filtered = items.filter(item => {
        const prod = products.find(p => p.Product_ID === item.Product_ID);
        const prodName = prod ? prod.Product_Name.toLowerCase() : '';
        const matchesSearch = item.Order_Item_ID.toLowerCase().includes(search) ||
          item.Order_ID.toLowerCase().includes(search) ||
          item.Product_ID.toLowerCase().includes(search) ||
          prodName.includes(search);
        const matchesOrder = !orderFilterVal || item.Order_ID === orderFilterVal;
        return matchesSearch && matchesOrder;
      });

      if (badge) badge.textContent = `Showing ${filtered.length} of ${items.length} records`;

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">No order items found.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(item => {
        const prod = products.find(p => p.Product_ID === item.Product_ID);
        const prodName = prod ? prod.Product_Name : 'Unknown Product';
        const subtotal = Number(item.Quantity) * Number(item.Price);

        return `
          <tr>
            <td><span class="pk-badge">${this.escapeHtml(item.Order_Item_ID)}</span></td>
            <td><span class="fk-badge">${this.escapeHtml(item.Order_ID)}</span></td>
            <td>
              <span class="fk-badge">${this.escapeHtml(item.Product_ID)}</span>
              <span style="margin-left: 0.35rem; font-weight: 500;">${this.escapeHtml(prodName)}</span>
            </td>
            <td><strong>${item.Quantity}</strong></td>
            <td>$${Number(item.Price).toFixed(2)}</td>
            <td><strong>$${subtotal.toFixed(2)}</strong></td>
            <td>
              <div class="action-btn-group">
                <button class="tbl-action-btn" title="Edit Order Item" onclick="app.openEditOrderItemModal('${item.Order_Item_ID}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="tbl-action-btn delete-btn" title="Delete Order Item" onclick="app.confirmDeleteOrderItem('${item.Order_Item_ID}')">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    openAddOrderItemModal() {
      document.getElementById('orderItemFormMode').value = 'add';
      document.getElementById('orderItemModalTitle').innerHTML = '<i class="fa-solid fa-receipt"></i> Add Order Line Item';

      const idInput = document.getElementById('itemInputId');
      idInput.disabled = false;
      const items = db.getOrderItems();
      idInput.value = `ITEM-${items.length + 415}`;

      // Populate Orders Dropdown
      const orderSelect = document.getElementById('itemInputOrderId');
      const orders = db.getOrders();
      orderSelect.innerHTML = orders.map(o => `
        <option value="${this.escapeHtml(o.Order_ID)}">${this.escapeHtml(o.Order_ID)} (${this.escapeHtml(o.Customer_ID)})</option>
      `).join('');

      // Populate Products Dropdown
      const prodSelect = document.getElementById('itemInputProductId');
      const products = db.getProducts();
      prodSelect.innerHTML = products.map(p => `
        <option value="${this.escapeHtml(p.Product_ID)}" data-price="${p.Price}">
          ${this.escapeHtml(p.Product_ID)} - ${this.escapeHtml(p.Product_Name)} ($${Number(p.Price).toFixed(2)})
        </option>
      `).join('');

      // Initial price & preview
      if (products.length > 0) {
        document.getElementById('itemInputPrice').value = products[0].Price;
      }
      document.getElementById('itemInputQty').value = '1';
      this.updateItemSubtotalPreview();

      this.openModal('orderItemModal');
    }

    openEditOrderItemModal(itemId) {
      const items = db.getOrderItems();
      const item = items.find(i => i.Order_Item_ID === itemId);
      if (!item) return;

      document.getElementById('orderItemFormMode').value = 'edit';
      document.getElementById('orderItemModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Order Line Item';

      const idInput = document.getElementById('itemInputId');
      idInput.value = item.Order_Item_ID;
      idInput.disabled = true;

      // Populate Orders
      const orderSelect = document.getElementById('itemInputOrderId');
      const orders = db.getOrders();
      orderSelect.innerHTML = orders.map(o => `
        <option value="${this.escapeHtml(o.Order_ID)}" ${o.Order_ID === item.Order_ID ? 'selected' : ''}>
          ${this.escapeHtml(o.Order_ID)}
        </option>
      `).join('');

      // Populate Products
      const prodSelect = document.getElementById('itemInputProductId');
      const products = db.getProducts();
      prodSelect.innerHTML = products.map(p => `
        <option value="${this.escapeHtml(p.Product_ID)}" data-price="${p.Price}" ${p.Product_ID === item.Product_ID ? 'selected' : ''}>
          ${this.escapeHtml(p.Product_ID)} - ${this.escapeHtml(p.Product_Name)}
        </option>
      `).join('');

      document.getElementById('itemInputQty').value = item.Quantity;
      document.getElementById('itemInputPrice').value = item.Price;
      this.updateItemSubtotalPreview();

      this.openModal('orderItemModal');
    }

    onProductSelectForOrderItem(productId) {
      const products = db.getProducts();
      const prod = products.find(p => p.Product_ID === productId);
      if (prod) {
        document.getElementById('itemInputPrice').value = prod.Price;
        this.updateItemSubtotalPreview();
      }
    }

    updateItemSubtotalPreview() {
      const qty = parseFloat(document.getElementById('itemInputQty')?.value) || 0;
      const price = parseFloat(document.getElementById('itemInputPrice')?.value) || 0;
      const preview = document.getElementById('itemSubtotalPreview');
      if (preview) {
        preview.textContent = `$${(qty * price).toFixed(2)}`;
      }
    }

    handleOrderItemSubmit(e) {
      e.preventDefault();
      const mode = document.getElementById('orderItemFormMode').value;
      const id = document.getElementById('itemInputId').value.trim();
      const orderId = document.getElementById('itemInputOrderId').value;
      const productId = document.getElementById('itemInputProductId').value;
      const qty = parseInt(document.getElementById('itemInputQty').value, 10) || 1;
      const price = parseFloat(document.getElementById('itemInputPrice').value) || 0;

      const items = db.getOrderItems();

      if (mode === 'add') {
        if (items.some(i => i.Order_Item_ID === id)) {
          this.showToast('Primary Key Error', `Item ID "${id}" already exists.`, 'danger');
          return;
        }
        items.push({ Order_Item_ID: id, Order_ID: orderId, Product_ID: productId, Quantity: qty, Price: price });
        db.saveOrderItems(items);
        this.showToast('Item Added', `Line item ${id} added to Order ${orderId}.`, 'success');
      } else {
        const index = items.findIndex(i => i.Order_Item_ID === id);
        if (index !== -1) {
          items[index] = { Order_Item_ID: id, Order_ID: orderId, Product_ID: productId, Quantity: qty, Price: price };
          db.saveOrderItems(items);
          this.showToast('Item Updated', `Line item ${id} modified.`, 'success');
        }
      }

      // Sync parent Order's Total Amount!
      db.syncOrderTotal(orderId);

      this.closeModal('orderItemModal');
      this.renderOrderItemsTable();
      this.renderOrdersTable();
      this.updateSidebarBadges();
      this.renderDashboard();
    }

    confirmDeleteOrderItem(itemId) {
      const items = db.getOrderItems();
      const item = items.find(i => i.Order_Item_ID === itemId);
      if (!item) return;

      const msg = document.getElementById('deleteModalMessage');
      const warningBox = document.getElementById('deleteFkWarning');
      msg.textContent = `Are you sure you want to remove item "${itemId}" from Order "${item.Order_ID}"?`;
      warningBox.style.display = 'none';

      this.pendingDeleteAction = () => {
        const remaining = items.filter(i => i.Order_Item_ID !== itemId);
        db.saveOrderItems(remaining);
        db.syncOrderTotal(item.Order_ID);

        this.showToast('Item Removed', `Line item ${itemId} deleted. Order total recalculated.`, 'warning');
        this.renderOrderItemsTable();
        this.renderOrdersTable();
        this.updateSidebarBadges();
        this.renderDashboard();
      };

      this.openModal('confirmDeleteModal');
    }

    // ------------------------------------------------------------------------
    // 10. INTERACTIVE LIVE SQL QUERY SIMULATOR
    // ------------------------------------------------------------------------
    setQueryAndRun(queryText) {
      const textarea = document.getElementById('sqlQueryInput');
      if (textarea) {
        textarea.value = queryText;
        this.executeLiveSqlQuery();
      }
    }

    clearSqlQuery() {
      const textarea = document.getElementById('sqlQueryInput');
      if (textarea) textarea.value = '';
      const wrapper = document.getElementById('sqlResultTableWrapper');
      if (wrapper) {
        wrapper.innerHTML = `<div class="empty-query-hint"><i class="fa-solid fa-database"></i><p>Type a query or select a preset to execute.</p></div>`;
      }
      const stats = document.getElementById('sqlResultStats');
      if (stats) stats.innerHTML = '<i class="fa-solid fa-circle-check text-emerald"></i> Ready';
      const copyBtn = document.getElementById('copyResultBtn');
      if (copyBtn) copyBtn.style.display = 'none';
    }

    executeLiveSqlQuery() {
      const textarea = document.getElementById('sqlQueryInput');
      const query = (textarea?.value || '').trim();
      const wrapper = document.getElementById('sqlResultTableWrapper');
      const stats = document.getElementById('sqlResultStats');
      const copyBtn = document.getElementById('copyResultBtn');
      if (!query || !wrapper) return;

      const startTime = performance.now();

      try {
        const result = this.parseAndRunQuery(query);
        const elapsed = (performance.now() - startTime).toFixed(2);

        if (!result.data || result.data.length === 0) {
          wrapper.innerHTML = `
            <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
              <i class="fa-solid fa-inbox" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--primary-400);"></i>
              <p>Query executed successfully: <strong>0 rows returned</strong> (${elapsed}ms)</p>
            </div>
          `;
          stats.innerHTML = `<span style="color: var(--accent-emerald); font-weight: 600;"><i class="fa-solid fa-check"></i> Executed in ${elapsed}ms (0 rows)</span>`;
          if (copyBtn) copyBtn.style.display = 'none';
          return;
        }

        const columns = Object.keys(result.data[0]);

        let tableHtml = `
          <table class="data-table">
            <thead>
              <tr>
                ${columns.map(col => `<th>${this.escapeHtml(col)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${result.data.map(row => `
                <tr>
                  ${columns.map(col => {
                    const val = row[col];
                    const isNum = typeof val === 'number' && !isNaN(val);
                    const formatted = isNum && col.toLowerCase().includes('amount') || col.toLowerCase().includes('price') || col.toLowerCase().includes('revenue') || col.toLowerCase().includes('value') ? `$${Number(val).toFixed(2)}` : val;
                    return `<td>${this.escapeHtml(String(formatted !== undefined && formatted !== null ? formatted : 'NULL'))}</td>`;
                  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;

        wrapper.innerHTML = tableHtml;
        stats.innerHTML = `<span style="color: var(--accent-emerald); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> ${result.data.length} row(s) returned in ${elapsed}ms</span>`;
        if (copyBtn) copyBtn.style.display = 'inline-flex';
        this.currentQueryResult = result.data;

      } catch (err) {
        wrapper.innerHTML = `
          <div style="padding: 1.5rem; color: var(--accent-rose); background: rgba(244, 63, 94, 0.08); border-radius: var(--radius-md);">
            <strong><i class="fa-solid fa-triangle-exclamation"></i> SQL Syntax / Execution Notice:</strong>
            <p style="margin-top: 0.4rem; font-family: var(--font-mono); font-size: 0.82rem;">${this.escapeHtml(err.message)}</p>
          </div>
        `;
        stats.innerHTML = `<span style="color: var(--accent-rose); font-weight: 600;"><i class="fa-solid fa-xmark"></i> Execution failed</span>`;
        if (copyBtn) copyBtn.style.display = 'none';
      }
    }

    parseAndRunQuery(query) {
      const q = query.replace(/;/g, '').trim();
      const upper = q.toUpperCase();

      const customers = db.getCustomers();
      const products = db.getProducts();
      const orders = db.getOrders();
      const items = db.getOrderItems();

      // Multi-table JOIN: ORDER_ITEM JOIN ORDERS JOIN CUSTOMER JOIN PRODUCT
      if (upper.includes('JOIN') && upper.includes('ORDER_ITEM') && upper.includes('CUSTOMER') && upper.includes('PRODUCT')) {
        const dataset = [];
        items.forEach(oi => {
          const ord = orders.find(o => o.Order_ID === oi.Order_ID);
          const cust = ord ? customers.find(c => c.Customer_ID === ord.Customer_ID) : null;
          const prod = products.find(p => p.Product_ID === oi.Product_ID);

          if (ord && cust && prod) {
            dataset.push({
              Order_ID: ord.Order_ID,
              Customer_Name: cust.Customer_Name,
              Phone: cust.Phone,
              Product_Name: prod.Product_Name,
              Category: prod.Category,
              Quantity: oi.Quantity,
              Price: oi.Price,
              Item_Total: Number((oi.Quantity * oi.Price).toFixed(2)),
              Order_Status: ord.Status
            });
          }
        });
        return { data: dataset };
      }

      // Two-table JOIN: ORDERS JOIN CUSTOMER
      if (upper.includes('JOIN') && upper.includes('ORDERS') && upper.includes('CUSTOMER')) {
        const dataset = [];
        orders.forEach(o => {
          const cust = customers.find(c => c.Customer_ID === o.Customer_ID);
          if (cust) {
            dataset.push({
              Order_ID: o.Order_ID,
              Customer_Name: cust.Customer_Name,
              Email: cust.Email,
              Order_Date: o.Order_Date,
              Total_Amount: o.Total_Amount,
              Status: o.Status
            });
          }
        });
        return { data: dataset };
      }

      // Two-table JOIN: ORDER_ITEM JOIN PRODUCT
      if (upper.includes('JOIN') && upper.includes('ORDER_ITEM') && upper.includes('PRODUCT')) {
        const dataset = [];
        items.forEach(oi => {
          const prod = products.find(p => p.Product_ID === oi.Product_ID);
          if (prod) {
            dataset.push({
              Order_Item_ID: oi.Order_Item_ID,
              Order_ID: oi.Order_ID,
              Product_Name: prod.Product_Name,
              Category: prod.Category,
              Quantity: oi.Quantity,
              Price: oi.Price,
              Subtotal: Number((oi.Quantity * oi.Price).toFixed(2))
            });
          }
        });
        return { data: dataset };
      }

      // GROUP BY: Status on ORDERS
      if (upper.includes('GROUP BY') && upper.includes('STATUS') && upper.includes('ORDERS')) {
        const map = {};
        orders.forEach(o => {
          if (!map[o.Status]) {
            map[o.Status] = { Order_Count: 0, Total_Value: 0, sumAmount: 0 };
          }
          map[o.Status].Order_Count++;
          map[o.Status].sumAmount += Number(o.Total_Amount || 0);
        });

        const dataset = Object.keys(map).map(status => ({
          Status: status,
          Order_Count: map[status].Order_Count,
          Total_Value: parseFloat(map[status].sumAmount.toFixed(2)),
          Avg_Order_Value: parseFloat((map[status].sumAmount / map[status].Order_Count).toFixed(2))
        }));
        return { data: dataset };
      }

      // Generic SELECT FROM CUSTOMER
      if (upper.includes('FROM CUSTOMER')) {
        return { data: customers };
      }

      // Generic SELECT FROM PRODUCT (with optional WHERE Stock < 20)
      if (upper.includes('FROM PRODUCT')) {
        if (upper.includes('WHERE STOCK < 20') || upper.includes('STOCK <')) {
          return { data: products.filter(p => Number(p.Stock) < 20) };
        }
        return { data: products };
      }

      // Generic SELECT FROM ORDERS
      if (upper.includes('FROM ORDERS')) {
        return { data: orders };
      }

      // Generic SELECT FROM ORDER_ITEM
      if (upper.includes('FROM ORDER_ITEM')) {
        return { data: items };
      }

      // Fallback: Default to all orders or prompt helpful message
      return { data: orders };
    }

    copyQueryResult() {
      if (!this.currentQueryResult || this.currentQueryResult.length === 0) return;
      const json = JSON.stringify(this.currentQueryResult, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        this.showToast('Copied', 'Query results copied to clipboard as JSON.', 'info');
      });
    }

    copyCodeBlock(btnElement) {
      const codeBlock = btnElement.closest('.code-card').querySelector('code');
      if (codeBlock) {
        const text = codeBlock.innerText;
        navigator.clipboard.writeText(text).then(() => {
          const original = btnElement.innerHTML;
          btnElement.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            btnElement.innerHTML = original;
          }, 2000);
        });
      }
    }

    exportSqlScript() {
      const customers = db.getCustomers();
      const products = db.getProducts();
      const orders = db.getOrders();
      const items = db.getOrderItems();

      let sql = `-- ==========================================================================\n`;
      sql += `-- E-COMMERCE ORDER MANAGEMENT SYSTEM - DATABASE SCHEMA & SEED SCRIPT\n`;
      sql += `-- DBMS Course Project | Department of AI / CSE\n`;
      sql += `-- Generated on: ${new Date().toISOString()}\n`;
      sql += `-- ==========================================================================\n\n`;

      sql += `CREATE DATABASE IF NOT EXISTS ecommerce_db;\nUSE ecommerce_db;\n\n`;

      sql += `-- 1. TABLE: CUSTOMER\n`;
      sql += `DROP TABLE IF EXISTS ORDER_ITEM;\nDROP TABLE IF EXISTS ORDERS;\nDROP TABLE IF EXISTS PRODUCT;\nDROP TABLE IF EXISTS CUSTOMER;\n\n`;

      sql += `CREATE TABLE CUSTOMER (\n`;
      sql += `    Customer_ID VARCHAR(20) PRIMARY KEY,\n`;
      sql += `    Customer_Name VARCHAR(100) NOT NULL,\n`;
      sql += `    Email VARCHAR(100) UNIQUE NOT NULL,\n`;
      sql += `    Phone VARCHAR(20) NOT NULL,\n`;
      sql += `    Address VARCHAR(255) NOT NULL\n);\n\n`;

      sql += `CREATE TABLE PRODUCT (\n`;
      sql += `    Product_ID VARCHAR(20) PRIMARY KEY,\n`;
      sql += `    Product_Name VARCHAR(150) NOT NULL,\n`;
      sql += `    Category VARCHAR(50) NOT NULL,\n`;
      sql += `    Price DECIMAL(10,2) NOT NULL CHECK (Price > 0),\n`;
      sql += `    Stock INT NOT NULL DEFAULT 0\n);\n\n`;

      sql += `CREATE TABLE ORDERS (\n`;
      sql += `    Order_ID VARCHAR(20) PRIMARY KEY,\n`;
      sql += `    Customer_ID VARCHAR(20) NOT NULL,\n`;
      sql += `    Order_Date DATE NOT NULL,\n`;
      sql += `    Total_Amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,\n`;
      sql += `    Status VARCHAR(30) DEFAULT 'Pending',\n`;
      sql += `    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID) ON DELETE RESTRICT ON UPDATE CASCADE\n);\n\n`;

      sql += `CREATE TABLE ORDER_ITEM (\n`;
      sql += `    Order_Item_ID VARCHAR(20) PRIMARY KEY,\n`;
      sql += `    Order_ID VARCHAR(20) NOT NULL,\n`;
      sql += `    Product_ID VARCHAR(20) NOT NULL,\n`;
      sql += `    Quantity INT NOT NULL CHECK (Quantity > 0),\n`;
      sql += `    Price DECIMAL(10,2) NOT NULL,\n`;
      sql += `    FOREIGN KEY (Order_ID) REFERENCES ORDERS(Order_ID) ON DELETE CASCADE ON UPDATE CASCADE,\n`;
      sql += `    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID) ON DELETE RESTRICT ON UPDATE CASCADE\n);\n\n`;

      sql += `-- INSERT SAMPLE CUSTOMERS\n`;
      customers.forEach(c => {
        sql += `INSERT INTO CUSTOMER (Customer_ID, Customer_Name, Email, Phone, Address) VALUES ('${c.Customer_ID}', '${c.Customer_Name.replace(/'/g, "''")}', '${c.Email}', '${c.Phone}', '${c.Address.replace(/'/g, "''")}');\n`;
      });

      sql += `\n-- INSERT SAMPLE PRODUCTS\n`;
      products.forEach(p => {
        sql += `INSERT INTO PRODUCT (Product_ID, Product_Name, Category, Price, Stock) VALUES ('${p.Product_ID}', '${p.Product_Name.replace(/'/g, "''")}', '${p.Category.replace(/'/g, "''")}', ${p.Price}, ${p.Stock});\n`;
      });

      sql += `\n-- INSERT SAMPLE ORDERS\n`;
      orders.forEach(o => {
        sql += `INSERT INTO ORDERS (Order_ID, Customer_ID, Order_Date, Total_Amount, Status) VALUES ('${o.Order_ID}', '${o.Customer_ID}', '${o.Order_Date}', ${o.Total_Amount}, '${o.Status}');\n`;
      });

      sql += `\n-- INSERT SAMPLE ORDER ITEMS\n`;
      items.forEach(i => {
        sql += `INSERT INTO ORDER_ITEM (Order_Item_ID, Order_ID, Product_ID, Quantity, Price) VALUES ('${i.Order_Item_ID}', '${i.Order_ID}', '${i.Product_ID}', ${i.Quantity}, ${i.Price});\n`;
      });

      // Trigger file download
      const blob = new Blob([sql], { type: 'text/sql' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ecommerce_order_management_schema.sql';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.showToast('SQL Exported', 'Full schema and INSERT statements downloaded as .sql script.', 'success');
    }

    // ------------------------------------------------------------------------
    // 11. MODAL UTILITIES
    // ------------------------------------------------------------------------
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    // ------------------------------------------------------------------------
    // 12. TOAST NOTIFICATIONS
    // ------------------------------------------------------------------------
    showToast(title, message, type = 'info') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;

      let iconClass = 'fa-solid fa-circle-info';
      if (type === 'success') iconClass = 'fa-solid fa-circle-check';
      if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';
      if (type === 'danger') iconClass = 'fa-solid fa-circle-xmark';

      toast.innerHTML = `
        <div class="toast-icon"><i class="${iconClass}"></i></div>
        <div class="toast-message">
          <h5>${this.escapeHtml(title)}</h5>
          <p>${this.escapeHtml(message)}</p>
        </div>
        <div class="toast-progress"></div>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 250);
      }, 3500);
    }

    // HTML Sanitization
    escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  }

  // Instantiate application controller and expose globally
  window.app = new AppController();

  document.addEventListener('DOMContentLoaded', () => {
    window.app.init();
  });
})();
