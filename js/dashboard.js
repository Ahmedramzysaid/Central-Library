document.addEventListener("DOMContentLoaded", () => {
    // Cache DOM elements for better performance
    const elements = {
        sidebar: document.querySelector(".sidebar"),
        toggleSidebarBtn: document.getElementById("toggle-sidebar"),
        navItems: document.querySelectorAll(".sidebar-menu li"),
        pages: document.querySelectorAll(".page"),
        themeToggleBtn: document.getElementById("theme-toggle-btn"),
        themeToggleIcon: document.querySelector(".theme-toggle-icon"),
        languageToggleBtn: document.getElementById("language-toggle-btn"),
        languageToggleIcon: document.querySelector(".language-toggle-icon"),
        modals: {
            addBook: document.getElementById("add-book-modal"),
            addMember: document.getElementById("add-member-modal"),
            addLoan: document.getElementById("add-loan-modal"),
            addCategory: document.getElementById("add-category-modal"),
            viewBook: document.getElementById("view-book-modal"),
            confirmAction: document.getElementById("confirm-action-modal")
        },
        modalTriggers: {
            addBook: document.getElementById("add-book-btn"),
            addMember: document.getElementById("add-member-btn"),
            addLoan: document.getElementById("add-borrowing-btn"),
            addCategory: document.getElementById("add-category-btn")
        },
        closeModalBtns: document.querySelectorAll(".close-modal"),
        cancelBtns: document.querySelectorAll(".cancel-btn, .cancel-member-btn, .cancel-loan-btn, .cancel-category-btn"),
        forms: {
            addBook: document.getElementById("add-book-form"),
            addMember: document.getElementById("add-member-form"),
            addLoan: document.getElementById("add-loan-form"),
            addCategory: document.getElementById("add-category-form"),
            librarySettings: document.getElementById("library-settings-form"),
            borrowingSettings: document.getElementById("borrowing-settings-form"),
            websiteSettings: document.getElementById("website-settings-form")
        },
        fileInputs: document.querySelectorAll(".file-input"),
        selectAllCheckboxes: {
            books: document.getElementById("select-all-books"),
            members: document.getElementById("select-all-members"),
            borrowings: document.getElementById("select-all-borrowings"),
            categories: document.getElementById("select-all-categories")
        },
        itemCheckboxes: {
            books: document.querySelectorAll(".book-checkbox"),
            members: document.querySelectorAll(".member-checkbox"),
            borrowings: document.querySelectorAll(".borrowing-checkbox"),
            categories: document.querySelectorAll(".category-checkbox")
        },
        reportTabs: document.querySelectorAll(".report-tab"),
        reportContents: document.querySelectorAll(".report-content"),
        logoutBtn: document.getElementById("logout-btn"),
        searchInput: document.querySelector(".search-input"),
        searchBtn: document.querySelector(".search-btn"),
        bookApprovalBtns: {
            approve: document.querySelectorAll(".approve-book-btn"),
            reject: document.querySelectorAll(".reject-book-btn"),
            view: document.querySelectorAll(".view-book-btn")
        },
        pendingApprovalTab: document.getElementById("pending-approval-tab"),
        allBooksTab: document.getElementById("all-books-tab"),
        bookTabs: document.querySelectorAll(".book-tab")
    };

    // Translations
    const translations = {
        en: {
            "overview": "Overview",
            "books": "Books",
            "members": "Members",
            "borrowing": "Borrowing",
            "reports": "Reports",
            "categories": "Categories",
            "about-us": "About Us",
            "settings": "Settings",
            "logout": "Logout",
            "dark-mode": "Dark Mode",
            "light-mode": "Light Mode",
            "library-dashboard": "Library Dashboard",
            "welcome-dashboard": "Welcome to your library dashboard",
            "add-book": "Add Book",
            "add-member": "Add Member",
            "new-loan": "New Loan",
            "search-books": "Search books...",
            "total-borrowed": "Total Borrowed This Month",
            "total-returns": "Total Returns This Month",
            "active-borrowers": "Active Borrowers",
            "avg-duration": "Average Borrowing Duration",
            "days": "days",
            "from-last-month": "from last month",
            "monthly-activity": "Monthly Activity",
            "top-books": "Top Books",
            "recent-activity": "Recent Borrowing Activity",
            "borrows": "borrows",
            "available": "Available",
            "borrowed": "Borrowed",
            "returned": "Returned",
            "overdue": "Overdue",
            "member": "Member",
            "book": "Book",
            "status": "Status",
            "date": "Date",
            "due-date": "Due Date",
            "books-management": "Books Management",
            "members-management": "Members Management",
            "borrowing-management": "Borrowing Management",
            "category": "Category",
            "reference-number": "Reference Number",
            "date-added": "Date Added",
            "actions": "Actions",
            "email": "Email",
            "phone": "Phone",
            "member-type": "Member Type",
            "join-date": "Join Date",
            "borrow-date": "Borrow Date",
            "return-date": "Return Date",
            "monthly": "Monthly",
            "member-distribution": "Member Distribution",
            "category-distribution": "Category Distribution",
            "about-us-title": "About Our Library",
            "about-us-content": "Welcome to our library management system. We are dedicated to providing a seamless experience for managing books, members, and borrowing activities. Our system is designed to help librarians and administrators efficiently manage library resources and provide better service to library members.",
            "add-new-book": "Add New Book",
            "book-title": "Book Title",
            "author": "Author",
            "isbn": "ISBN",
            "publish-date": "Publish Date",
            "pages": "Number of Pages",
            "language": "Language",
            "cover-image": "Cover Image",
            "description": "Description",
            "cancel": "Cancel",
            "add": "Add",
            "add-new-member": "Add New Member",
            "full-name": "Full Name",
            "address": "Address",
            "create-loan": "Create Loan",
            "notes": "Notes",
            "select-member": "Select member",
            "select-book": "Select book",
            "select-category": "Select category",
            "choose-file": "Choose file",
            "no-file-chosen": "No file chosen",
            "student": "Student",
            "teacher": "Teacher",
            "staff": "Staff",
            "fiction": "Fiction",
            "science": "Science",
            "history": "History",
            "philosophy": "Philosophy",
            "psychology": "Psychology",
            "self-help": "Self-Help",
            "english": "English",
            "arabic": "Arabic",
            "french": "French",
            "spanish": "Spanish",
            "sort-by": "Sort by",
            "search": "Search",
            "book-count": "Book Count",
            "borrow-count": "Borrow Count",
            "category-name": "Category Name",
            "icon": "Icon",
            "color": "Color",
            "add-category": "Add Category",
            "add-new-category": "Add New Category",
            "library-settings": "Library Settings",
            "library-name": "Library Name",
            "website": "Website",
            "borrowing-settings": "Borrowing Settings",
            "max-books": "Maximum Books Per Member",
            "loan-period": "Loan Period (days)",
            "fine-rate": "Daily Fine Rate",
            "renewal-limit": "Renewal Limit",
            "save-changes": "Save Changes",
            "website-settings": "Website Settings",
            "site-title": "Site Title",
            "site-description": "Site Description",
            "site-logo": "Site Logo",
            "site-theme": "Site Theme",
            "overdue-books": "Overdue Books",
            "popular-books": "Popular Books",
            "active-members": "Active Members",
            "select-type": "Select type",
            "pending-approval": "Pending Approval",
            "all-books": "All Books",
            "approve": "Approve",
            "reject": "Reject",
            "view": "View",
            "submitted-date": "Submitted Date",
            "added-by": "Added By",
            "confirm-action": "Confirm Action",
            "approve-book-message": "Are you sure you want to approve this book?",
            "reject-book-message": "Are you sure you want to reject this book?",
            "yes": "Yes",
            "no": "No",
            "book-details": "Book Details",
            "book-file": "Book File",
            "download": "Download",
            "preview": "Preview",
            "upload-date": "Upload Date",
            "uploaded-by": "Uploaded By",
            "book-approved": "Book approved successfully!",
            "book-rejected": "Book rejected successfully!",
            "newest-first": "Newest first",
            "oldest-first": "Oldest first",
            "a-to-z": "A to Z",
            "z-to-a": "Z to A"
        },
        ar: {
            "overview": "نظرة عامة",
            "books": "الكتب",
            "members": "الأعضاء",
            "borrowing": "الاستعارة",
            "reports": "التقارير",
            "categories": "التصنيفات",
            "about-us": "من نحن",
            "settings": "الإعدادات",
            "logout": "تسجيل الخروج",
            "dark-mode": "الوضع الداكن",
            "light-mode": "الوضع الفاتح",
            "library-dashboard": "لوحة تحكم المكتبة",
            "welcome-dashboard": "مرحبًا بك في لوحة تحكم المكتبة",
            "add-book": "إضافة كتاب",
            "add-member": "إضافة عضو",
            "new-loan": "استعارة جديدة",
            "search-books": "البحث عن كتب...",
            "total-borrowed": "إجمالي الاستعارات هذا الشهر",
            "total-returns": "إجمالي المرجعات هذا الشهر",
            "active-borrowers": "المستعيرين النشطين",
            "avg-duration": "متوسط مدة الاستعارة",
            "days": "أيام",
            "from-last-month": "من الشهر الماضي",
            "monthly-activity": "النشاط الشهري",
            "top-books": "أكثر الكتب استعارة",
            "recent-activity": "نشاط الاستعارة الأخير",
            "borrows": "استعارة",
            "available": "متاح",
            "borrowed": "مستعار",
            "returned": "مرجع",
            "overdue": "متأخر",
            "member": "العضو",
            "book": "الكتاب",
            "status": "الحالة",
            "date": "التاريخ",
            "due-date": "تاريخ الإرجاع",
            "books-management": "إدارة الكتب",
            "members-management": "إدارة الأعضاء",
            "borrowing-management": "إدارة الاستعارة",
            "category": "التصنيف",
            "reference-number": "الرقم المرجعي",
            "date-added": "تاريخ الإضافة",
            "actions": "الإجراءات",
            "email": "البريد الإلكتروني",
            "phone": "الهاتف",
            "member-type": "نوع العضوية",
            "join-date": "تاريخ الانضمام",
            "borrow-date": "تاريخ الاستعارة",
            "return-date": "تاريخ الإرجاع",
            "monthly": "شهري",
            "member-distribution": "توزيع الأعضاء",
            "category-distribution": "توزيع التصنيفات",
            "about-us-title": "عن مكتبتنا",
            "about-us-content": "مرحبًا بكم في نظام إدارة المكتبة. نحن ملتزمون بتوفير تجربة سلسة لإدارة الكتب والأعضاء وأنشطة الاستعارة. تم تصميم نظامنا لمساعدة أمناء المكتبات والمسؤولين على إدارة موارد المكتبة بكفاءة وتقديم خدمة أفضل لأعضاء المكتبة.",
            "add-new-book": "إضافة كتاب جديد",
            "book-title": "عنوان الكتاب",
            "author": "المؤلف",
            "isbn": "الرقم التسلسلي",
            "publish-date": "تاريخ النشر",
            "pages": "عدد الصفحات",
            "language": "اللغة",
            "cover-image": "صورة الغلاف",
            "description": "الوصف",
            "cancel": "إلغاء",
            "add": "إضافة",
            "add-new-member": "إضافة عضو جديد",
            "full-name": "الاسم الكامل",
            "address": "العنوان",
            "create-loan": "إنشاء استعارة",
            "notes": "ملاحظات",
            "select-member": "اختر العضو",
            "select-book": "اختر الكتاب",
            "select-category": "اختر التصنيف",
            "choose-file": "اختر ملفًا",
            "no-file-chosen": "لم يتم اختيار ملف",
            "student": "طالب",
            "teacher": "مدرس",
            "staff": "موظف",
            "fiction": "روايات",
            "science": "علوم",
            "history": "تاريخ",
            "philosophy": "فلسفة",
            "psychology": "علم نفس",
            "self-help": "تطوير ذاتي",
            "english": "الإنجليزية",
            "arabic": "العربية",
            "french": "الفرنسية",
            "spanish": "الإسبانية",
            "sort-by": "ترتيب حسب",
            "search": "بحث",
            "book-count": "عدد الكتب",
            "borrow-count": "عدد الاستعارات",
            "category-name": "اسم التصنيف",
            "icon": "أيقونة",
            "color": "لون",
            "add-category": "إضافة تصنيف",
            "add-new-category": "إضافة تصنيف جديد",
            "library-settings": "إعدادات المكتبة",
            "library-name": "اسم المكتبة",
            "website": "الموقع الإلكتروني",
            "borrowing-settings": "إعدادات الاستعارة",
            "max-books": "الحد الأقصى للكتب لكل عضو",
            "loan-period": "مدة الاستعارة (أيام)",
            "fine-rate": "معدل الغرامة اليومي",
            "renewal-limit": "حد التجديد",
            "save-changes": "حفظ التغييرات",
            "website-settings": "إعدادات الموقع",
            "site-title": "عنوان الموقع",
            "site-description": "وصف الموقع",
            "site-logo": "شعار الموقع",
            "site-theme": "سمة الموقع",
            "overdue-books": "الكتب المتأخرة",
            "popular-books": "الكتب الشائعة",
            "active-members": "الأعضاء النشطين",
            "select-type": "اختر النوع",
            "pending-approval": "بانتظار الموافقة",
            "all-books": "جميع الكتب",
            "approve": "موافقة",
            "reject": "رفض",
            "view": "عرض",
            "submitted-date": "تاريخ التقديم",
            "added-by": "أضيف بواسطة",
            "confirm-action": "تأكيد الإجراء",
            "approve-book-message": "هل أنت متأكد أنك تريد الموافقة على هذا الكتاب؟",
            "reject-book-message": "هل أنت متأكد أنك تريد رفض هذا الكتاب؟",
            "yes": "نعم",
            "no": "لا",
            "book-details": "تفاصيل الكتاب",
            "book-file": "ملف الكتاب",
            "download": "تحميل",
            "preview": "معاينة",
            "upload-date": "تاريخ الرفع",
            "uploaded-by": "تم الرفع بواسطة",
            "book-approved": "تمت الموافقة على الكتاب بنجاح!",
            "book-rejected": "تم رفض الكتاب بنجاح!",
            "newest-first": "الأحدث أولاً",
            "oldest-first": "الأقدم أولاً",
            "a-to-z": "أ إلى ي",
            "z-to-a": "ي إلى أ"
        }
    };

    // Toggle Sidebar
    function toggleSidebar() {
        if (elements.sidebar) {
            elements.sidebar.classList.toggle("collapsed");
            // Save sidebar state to localStorage
            localStorage.setItem("sidebarCollapsed", elements.sidebar.classList.contains("collapsed"));
        }
    }

    // Initialize sidebar state from localStorage
    function initSidebarState() {
        const sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
        if (sidebarCollapsed && elements.sidebar) {
            elements.sidebar.classList.add("collapsed");
        }
    }

    // Navigation
    function handleNavigation(item) {
        const pageId = item.getAttribute("data-page");
        
        // Update active nav item
        elements.navItems.forEach(navItem => navItem.classList.remove("active"));
        item.classList.add("active");
        
        // Show active page
        elements.pages.forEach(page => {
            page.classList.toggle("active", page.id === pageId);
        });
        
        // Save active page to localStorage
        localStorage.setItem("activePage", pageId);
        
        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768 && elements.sidebar) {
            elements.sidebar.classList.remove("active");
        }
    }

    // Initialize active page from localStorage
    function initActivePage() {
        const activePage = localStorage.getItem("activePage");
        if (activePage) {
            const activeNavItem = document.querySelector(`.sidebar-menu li[data-page="${activePage}"]`);
            if (activeNavItem) {
                handleNavigation(activeNavItem);
            }
        }
    }
document.querySelector('.toggle-btn').addEventListener('click', function(client) {
    const header = document.querySelector('.sidebar-header h2');
    header.classList.toggle('visible');
}); 
    // Theme Toggle
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");

        // Update theme toggle button text
        if (elements.themeToggleBtn) {
            elements.themeToggleBtn.innerHTML = isDarkMode ? 
                '<i class="fas fa-sun"></i> <span data-translate="light-mode">Light Mode</span>' : 
                '<i class="fas fa-moon"></i> <span data-translate="dark-mode">Dark Mode</span>';
        }

        // Update theme toggle icon
        if (elements.themeToggleIcon) {
            elements.themeToggleIcon.innerHTML = isDarkMode ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        }

        // Save theme preference to localStorage
        localStorage.setItem("darkMode", isDarkMode);
        
        // Update charts if they exist
        updateChartsTheme(isDarkMode);
    }

    // Initialize theme from localStorage
    function initTheme() {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        if (savedDarkMode) {
            document.body.classList.add("dark-mode");
            if (elements.themeToggleBtn) {
                elements.themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span data-translate="light-mode">Light Mode</span>';
            }
            if (elements.themeToggleIcon) {
                elements.themeToggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    }

    // Update charts theme
    function updateChartsTheme(isDarkMode) {
        if (typeof Chart !== "undefined") {
            Chart.defaults.color = isDarkMode ? "#e2e8f0" : "#475569";
            Chart.defaults.borderColor = isDarkMode ? "#334155" : "#e2e8f0";
            
            // Update all charts
            Chart.instances.forEach(chart => {
                chart.update();
            });
        }
    }

    // Language Toggle and Translation
    function translatePage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        // Add special class for Arabic font improvements
        if (lang === "ar") {
            document.body.classList.add("arabic-font");
        } else {
            document.body.classList.remove("arabic-font");
        }

        // Translate elements with data-translate attribute
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Translate placeholders
        const placeholders = document.querySelectorAll("[data-translate-placeholder]");
        placeholders.forEach(element => {
            const key = element.getAttribute("data-translate-placeholder");
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update language toggle button
        if (elements.languageToggleBtn) {
            elements.languageToggleBtn.innerHTML = lang === "en" ? 
                '<i class="fas fa-globe"></i> العربية' : 
                '<i class="fas fa-globe"></i> English';
        }

        // Update language toggle icon
        if (elements.languageToggleIcon) {
            elements.languageToggleIcon.innerHTML = lang === "en" ? 
                '<i class="fas fa-globe"></i>' : 
                '<i class="fas fa-globe"></i>';
        }

        // Save language preference to localStorage
        localStorage.setItem("language", lang);
    }

    function toggleLanguage() {
        const currentLang = document.documentElement.lang || "en";
        const newLang = currentLang === "en" ? "ar" : "en";
        translatePage(newLang);
    }

    // Initialize language from localStorage
    function initLanguage() {
        const savedLanguage = localStorage.getItem("language") || "en";
        translatePage(savedLanguage);
    }

    // Modal Functionality
    function openModal(modal) {
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            
            // Add animation class
            setTimeout(() => {
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.classList.add('modal-animate-in');
                }
            }, 10);
            
            // Focus on first input
            setTimeout(() => {
                const firstInput = modal.querySelector('input, select, textarea');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 300);
        }
    }

    function closeModal(modal) {
        if (modal) {
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.classList.remove('modal-animate-in');
                modalContent.classList.add('modal-animate-out');
                
                // Wait for animation to complete
                setTimeout(() => {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                    modalContent.classList.remove('modal-animate-out');
                }, 300);
            } else {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }

    function closeAllModals() {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            closeModal(modal);
        });
    }

    // File Input Handling
    function handleFileInput(input) {
        const fileName = input.files[0] ? input.files[0].name : translations[document.documentElement.lang || "en"]["no-file-chosen"];
        const fileNameElement = input.parentElement.querySelector(".file-name");
        if (fileNameElement) {
            fileNameElement.textContent = fileName;
        }
        
        // Preview image if it's an image file
        const previewElement = input.parentElement.parentElement.querySelector(".file-preview");
        if (previewElement && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewElement.src = e.target.result;
                previewElement.style.display = "block";
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    // Select All Checkboxes
    function handleSelectAll(selectAllCheckbox, itemCheckboxes) {
        if (selectAllCheckbox && itemCheckboxes.length > 0) {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        }
    }

    // Update "Select All" checkbox state based on item checkboxes
    function updateSelectAllState(selectAllCheckbox, itemCheckboxes) {
        if (selectAllCheckbox && itemCheckboxes.length > 0) {
            const allChecked = Array.from(itemCheckboxes).every(checkbox => checkbox.checked);
            const someChecked = Array.from(itemCheckboxes).some(checkbox => checkbox.checked);
            
            selectAllCheckbox.checked = allChecked;
            selectAllCheckbox.indeterminate = someChecked && !allChecked;
        }
    }

    // Report Tabs
    function handleReportTabClick(tab) {
        const tabId = tab.getAttribute("data-tab");
        
        // Update active tab
        elements.reportTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        // Show active report content
        elements.reportContents.forEach(content => {
            content.classList.toggle("active", content.id === tabId + "-report");
        });
        
        // Save active report tab to localStorage
        localStorage.setItem("activeReportTab", tabId);
    }

    // Initialize active report tab from localStorage
    function initActiveReportTab() {
        const activeReportTab = localStorage.getItem("activeReportTab");
        if (activeReportTab) {
            const activeTab = document.querySelector(`.report-tab[data-tab="${activeReportTab}"]`);
            if (activeTab) {
                handleReportTabClick(activeTab);
            }
        }
    }

    // Book Tabs
    function handleBookTabClick(tab) {
        const tabId = tab.getAttribute("data-tab");
        
        // Update active tab
        elements.bookTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        // Show active book content
        const bookContents = document.querySelectorAll(".book-content");
        bookContents.forEach(content => {
            content.classList.toggle("active", content.id === tabId + "-content");
        });
        
        // Save active book tab to localStorage
        localStorage.setItem("activeBookTab", tabId);
    }

    // Initialize active book tab from localStorage
    function initActiveBookTab() {
        const activeBookTab = localStorage.getItem("activeBookTab") || "all-books";
        const activeTab = document.querySelector(`.book-tab[data-tab="${activeBookTab}"]`);
        if (activeTab) {
            handleBookTabClick(activeTab);
        }
    }

    // Book Approval Functions
    function handleBookApproval(bookId, action) {
        // Show confirmation modal
        const confirmModal = elements.modals.confirmAction;
        const confirmMessage = document.getElementById("confirm-message");
        const confirmYesBtn = document.getElementById("confirm-yes");
        const confirmNoBtn = document.getElementById("confirm-no");
        
        if (confirmModal && confirmMessage && confirmYesBtn && confirmNoBtn) {
            // Set confirmation message based on action
            if (action === 'approve') {
                confirmMessage.textContent = translations[document.documentElement.lang || "en"]["approve-book-message"];
            } else if (action === 'reject') {
                confirmMessage.textContent = translations[document.documentElement.lang || "en"]["reject-book-message"];
            }
            
            // Open confirmation modal
            openModal(confirmModal);
            
            // Set up event listeners for confirmation buttons
            const handleYes = () => {
                // Perform the action
                processBookAction(bookId, action);
                
                // Clean up event listeners
                confirmYesBtn.removeEventListener('click', handleYes);
                confirmNoBtn.removeEventListener('click', handleNo);
                
                // Close modal
                closeModal(confirmModal);
            };
            
            const handleNo = () => {
                // Clean up event listeners
                confirmYesBtn.removeEventListener('click', handleYes);
                confirmNoBtn.removeEventListener('click', handleNo);
                
                // Close modal
                closeModal(confirmModal);
            };
            
            // Add event listeners
            confirmYesBtn.addEventListener('click', handleYes);
            confirmNoBtn.addEventListener('click', handleNo);
        }
    }

    function processBookAction(bookId, action) {
        // In a real application, this would make an API call to approve/reject the book
        // For demo purposes, we'll just show a success message and update the UI
        
        // Find the book row
        const bookRow = document.querySelector(`tr[data-book-id="${bookId}"]`);
        
        if (bookRow) {
            // Remove the book row with animation
            bookRow.classList.add('fade-out');
            
            setTimeout(() => {
                bookRow.remove();
                
                // Show success message
                const message = action === 'approve' 
                    ? translations[document.documentElement.lang || "en"]["book-approved"]
                    : translations[document.documentElement.lang || "en"]["book-rejected"];
                
                showNotification(message, 'success');
                
                // Update pending count
                updatePendingCount();
            }, 500);
        }
    }

    function updatePendingCount() {
        const pendingCount = document.querySelectorAll('.pending-books-table tbody tr').length;
        const pendingCountBadge = document.querySelector('.pending-count');
        
        if (pendingCountBadge) {
            pendingCountBadge.textContent = pendingCount;
            
            // Hide badge if no pending books
            if (pendingCount === 0) {
                pendingCountBadge.style.display = 'none';
            } else {
                pendingCountBadge.style.display = 'inline-flex';
            }
        }
    }

    function viewBookDetails(bookId) {
        // In a real application, this would fetch book details from the server
        // For demo purposes, we'll just show a modal with some placeholder data
        
        const viewBookModal = elements.modals.viewBook;
        if (viewBookModal) {
            // Find book data from the table row
            const bookRow = document.querySelector(`tr[data-book-id="${bookId}"]`);
            if (bookRow) {
                const title = bookRow.querySelector('td:nth-child(2)').textContent;
                const author = bookRow.querySelector('td:nth-child(3)').textContent;
                const category = bookRow.querySelector('td:nth-child(4)').textContent;
                
                // Update modal content
                const modalTitle = viewBookModal.querySelector('.modal-title');
                const bookTitleEl = document.getElementById('view-book-title');
                const bookAuthorEl = document.getElementById('view-book-author');
                const bookCategoryEl = document.getElementById('view-book-category');
                
                if (modalTitle) modalTitle.textContent = title;
                if (bookTitleEl) bookTitleEl.textContent = title;
                if (bookAuthorEl) bookAuthorEl.textContent = author;
                if (bookCategoryEl) bookCategoryEl.textContent = category;
                
                // Open the modal
                openModal(viewBookModal);
            }
        }
    }

    // Show notification
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="close-notification"><i class="fas fa-times"></i></button>
        `;
        
        // Add to the DOM
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto-hide after 5 seconds
        const hideTimeout = setTimeout(() => {
            hideNotification(notification);
        }, 5000);
        
        // Close button
        const closeBtn = notification.querySelector('.close-notification');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                clearTimeout(hideTimeout);
                hideNotification(notification);
            });
        }
    }

    function hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }

    // Search functionality
    function handleSearch(event) {
        event.preventDefault();
        const searchTerm = elements.searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // Get active page
            const activePage = document.querySelector(".page.active");
            if (activePage) {
                const pageId = activePage.id;
                
                // Search based on active page
                switch (pageId) {
                    case "books":
                        searchBooks(searchTerm);
                        break;
                    case "users":
                        searchMembers(searchTerm);
                        break;
                    case "borrowing":
                        searchBorrowings(searchTerm);
                        break;
                    case "categories":
                        searchCategories(searchTerm);
                        break;
                    default:
                        // Global search
                        showNotification(`Searching for: ${searchTerm}`, 'info');
                        break;
                }
            }
        }
    }

    // Search functions for different pages
    function searchBooks(term) {
        const rows = document.querySelectorAll(".books-table tbody tr, .pending-books-table tbody tr");
        rows.forEach(row => {
            const title = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
            const author = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            const category = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
            
            if (title.includes(term) || author.includes(term) || category.includes(term)) {
                row.style.display = "";
                highlightSearchTerm(row, term);
            } else {
                row.style.display = "none";
            }
        });
    }

    function searchMembers(term) {
        const rows = document.querySelectorAll(".users-table tbody tr");
        rows.forEach(row => {
            const name = row.querySelector(".user-info p").textContent.toLowerCase();
            const email = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            const phone = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
            
            if (name.includes(term) || email.includes(term) || phone.includes(term)) {
                row.style.display = "";
                highlightSearchTerm(row, term);
            } else {
                row.style.display = "none";
            }
        });
    }

    function searchBorrowings(term) {
        const rows = document.querySelectorAll(".borrowing-table tbody tr");
        rows.forEach(row => {
            const member = row.querySelector(".user-info p").textContent.toLowerCase();
            const book = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            
            if (member.includes(term) || book.includes(term)) {
                row.style.display = "";
                highlightSearchTerm(row, term);
            } else {
                row.style.display = "none";
            }
        });
    }

    function searchCategories(term) {
        const rows = document.querySelectorAll(".categories-table tbody tr");
        rows.forEach(row => {
            const category = row.querySelector(".category-name span:last-child").textContent.toLowerCase();
            const description = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            
            if (category.includes(term) || description.includes(term)) {
                row.style.display = "";
                highlightSearchTerm(row, term);
            } else {
                row.style.display = "none";
            }
        });
    }

    // Highlight search term in results
    function highlightSearchTerm(element, term) {
        const textNodes = getTextNodes(element);
        textNodes.forEach(node => {
            const text = node.nodeValue;
            const lowerText = text.toLowerCase();
            const index = lowerText.indexOf(term);
            
            if (index >= 0) {
                const before = text.substring(0, index);
                const match = text.substring(index, index + term.length);
                const after = text.substring(index + term.length);
                
                const span = document.createElement("span");
                span.className = "search-highlight";
                span.textContent = match;
                
                const fragment = document.createDocumentFragment();
                fragment.appendChild(document.createTextNode(before));
                fragment.appendChild(span);
                fragment.appendChild(document.createTextNode(after));
                
                node.parentNode.replaceChild(fragment, node);
            }
        });
    }

    // Get all text nodes within an element
    function getTextNodes(element) {
        const textNodes = [];
        const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walk.nextNode()) {
            textNodes.push(node);
        }
        return textNodes;
    }

    // Clear search highlights
    function clearSearchHighlights() {
        const highlights = document.querySelectorAll(".search-highlight");
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
    }

    // Reset search
    function resetSearch() {
        elements.searchInput.value = "";
        clearSearchHighlights();
        
        // Show all rows
        const allRows = document.querySelectorAll(".books-table tbody tr, .users-table tbody tr, .borrowing-table tbody tr, .categories-table tbody tr, .pending-books-table tbody tr");
        allRows.forEach(row => {
            row.style.display = "";
        });
    }

    // Form validation
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll("[required]");
        
        // Reset previous validation errors
        form.querySelectorAll(".validation-error").forEach(error => error.remove());
        form.querySelectorAll(".validation-error-field").forEach(field => {
            field.classList.remove("validation-error-field");
        });
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                
                // Add validation error message
                const errorMessage = document.createElement("div");
                errorMessage.className = "validation-error";
                errorMessage.textContent = `${field.getAttribute("placeholder") || field.name || "This field"} is required`;
                field.parentNode.appendChild(errorMessage);
                
                // Highlight the field
                field.classList.add("validation-error-field");
            }
        });
        
        return isValid;
    }

    // Form submissions with validation
    function handleFormSubmission(form, successMessage) {
        if (validateForm(form)) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Reset file input displays
                form.querySelectorAll(".file-name").forEach(element => {
                    element.textContent = translations[document.documentElement.lang || "en"]["no-file-chosen"];
                });
                
                // Reset file previews
                form.querySelectorAll(".file-preview").forEach(element => {
                    element.style.display = "none";
                    element.src = "";
                });
                
                // Show success message
                showNotification(successMessage, 'success');
                
                // Close modal
                closeAllModals();
                
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        }
    }

    // Initialize charts
    function initCharts() {
        if (typeof Chart !== "undefined") {
            // Set global chart options
            Chart.defaults.font.family = "'Cairo', sans-serif";
            Chart.defaults.responsive = true;
            Chart.defaults.maintainAspectRatio = false;
            
            // Apply theme to charts
            const isDarkMode = document.body.classList.contains("dark-mode");
            Chart.defaults.color = isDarkMode ? "#e2e8f0" : "#475569";
            Chart.defaults.borderColor = isDarkMode ? "#334155" : "#e2e8f0";
            
            // Borrowing Chart
            const borrowingChartCanvas = document.getElementById("borrowingChart");
            if (borrowingChartCanvas) {
                new Chart(borrowingChartCanvas, {
                    type: "bar",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                label: "Borrows",
                                data: [65, 59, 80, 81, 56, 55],
                                backgroundColor: "rgba(16, 185, 129, 0.7)",
                                borderColor: "rgba(16, 185, 129, 1)",
                                borderWidth: 1,
                            },
                            {
                                label: "Returns",
                                data: [45, 49, 60, 71, 46, 45],
                                backgroundColor: "rgba(59, 130, 246, 0.7)",
                                borderColor: "rgba(59, 130, 246, 1)",
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                mode: 'index',
                                intersect: false,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    drawBorder: false,
                                },
                            },
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                        },
                    },
                });
            }

            // Monthly Activity Chart
            const monthlyActivityChartCanvas = document.getElementById("monthlyActivityChart");
            if (monthlyActivityChartCanvas) {
                new Chart(monthlyActivityChartCanvas, {
                    type: "line",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: "Borrows",
                                data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 120, 132, 91],
                                borderColor: "rgba(16, 185, 129, 1)",
                                backgroundColor: "rgba(16, 185, 129, 0.1)",
                                tension: 0.4,
                                fill: true,
                            },
                            {
                                label: "Returns",
                                data: [45, 49, 60, 71, 46, 45, 30, 74, 54, 110, 120, 85],
                                borderColor: "rgba(59, 130, 246, 1)",
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                                tension: 0.4,
                                fill: true,
                            },
                            {
                                label: "Overdue",
                                data: [10, 15, 7, 11, 5, 9, 7, 14, 7, 13, 15, 10],
                                borderColor: "rgba(239, 68, 68, 1)",
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                                tension: 0.4,
                                fill: true,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                mode: 'index',
                                intersect: false,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    drawBorder: false,
                                },
                            },
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                        },
                    },
                });
            }

            // Category Distribution Chart
            const categoryDistributionChartCanvas = document.getElementById("categoryDistributionChart");
            if (categoryDistributionChartCanvas) {
                new Chart(categoryDistributionChartCanvas, {
                    type: "bar",
                    data: {
                        labels: ["Fiction", "Science", "History", "Philosophy", "Psychology", "Self-Help"],
                        datasets: [
                            {
                                label: "Book Count",
                                data: [120, 85, 70, 45, 60, 50],
                                backgroundColor: "rgba(16, 185, 129, 0.7)",
                                borderColor: "rgba(16, 185, 129, 1)",
                                borderWidth: 1,
                            },
                            {
                                label: "Borrow Count",
                                data: [95, 60, 40, 20, 35, 30],
                                backgroundColor: "rgba(59, 130, 246, 0.7)",
                                borderColor: "rgba(59, 130, 246, 1)",
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                mode: 'index',
                                intersect: false,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    drawBorder: false,
                                },
                            },
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                        },
                    },
                });
            }

            // Member Distribution Chart
            const memberDistributionChartCanvas = document.getElementById("memberDistributionChart");
            if (memberDistributionChartCanvas) {
                new Chart(memberDistributionChartCanvas, {
                    type: "pie",
                    data: {
                        labels: ["Student", "Teacher", "Staff", "Other"],
                        datasets: [
                            {
                                data: [65, 20, 10, 5],
                                backgroundColor: [
                                    "rgba(16, 185, 129, 0.7)",
                                    "rgba(59, 130, 246, 0.7)",
                                    "rgba(245, 158, 11, 0.7)",
                                    "rgba(107, 114, 128, 0.7)",
                                ],
                                borderColor: [
                                    "rgba(16, 185, 129, 1)",
                                    "rgba(59, 130, 246, 1)",
                                    "rgba(245, 158, 11, 1)",
                                    "rgba(107, 114, 128, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = Math.round((value / total) * 100);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            },
                        },
                    },
                });
            }
            
            // Category Chart for Reports
            const categoryChartCanvas = document.getElementById("categoryChart");
            if (categoryChartCanvas) {
                new Chart(categoryChartCanvas, {
                    type: "doughnut",
                    data: {
                        labels: ["Fiction", "Science", "History", "Philosophy", "Psychology", "Self-Help"],
                        datasets: [
                            {
                                data: [120, 85, 70, 45, 60, 50],
                                backgroundColor: [
                                    "rgba(16, 185, 129, 0.7)",
                                    "rgba(59, 130, 246, 0.7)",
                                    "rgba(245, 158, 11, 0.7)",
                                    "rgba(139, 92, 246, 0.7)",
                                    "rgba(236, 72, 153, 0.7)",
                                    "rgba(239, 68, 68, 0.7)",
                                ],
                                borderColor: [
                                    "rgba(16, 185, 129, 1)",
                                    "rgba(59, 130, 246, 1)",
                                    "rgba(245, 158, 11, 1)",
                                    "rgba(139, 92, 246, 1)",
                                    "rgba(236, 72, 153, 1)",
                                    "rgba(239, 68, 68, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = Math.round((value / total) * 100);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            },
                        },
                    },
                });
            }
        }
    }

    // Responsive sidebar for mobile
    function handleMobileNavigation() {
        // Add mobile navigation toggle button
        const mobileNavToggle = document.createElement("button");
        mobileNavToggle.className = "mobile-nav-toggle";
        mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector(".top-header").prepend(mobileNavToggle);
        
        // Toggle sidebar on mobile
        mobileNavToggle.addEventListener("click", () => {
            if (elements.sidebar) {
                elements.sidebar.classList.toggle("active");
            }
        });
        
        // Close sidebar when clicking outside
        document.addEventListener("click", (event) => {
            if (window.innerWidth <= 768 && 
                elements.sidebar && 
                elements.sidebar.classList.contains("active") && 
                !elements.sidebar.contains(event.target) && 
                !event.target.classList.contains("mobile-nav-toggle")) {
                elements.sidebar.classList.remove("active");
            }
        });
    }

    // Logout functionality
    function handleLogout(event) {
        event.preventDefault();
        
        // Show confirmation modal
        const confirmModal = elements.modals.confirmAction;
        const confirmMessage = document.getElementById("confirm-message");
        const confirmYesBtn = document.getElementById("confirm-yes");
        const confirmNoBtn = document.getElementById("confirm-no");
        
        if (confirmModal && confirmMessage && confirmYesBtn && confirmNoBtn) {
            // Set confirmation message
            confirmMessage.textContent = "Are you sure you want to logout?";
            
            // Open confirmation modal
            openModal(confirmModal);
            
            // Set up event listeners for confirmation buttons
            const handleYes = () => {
                // Show loading state
                event.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging out...';
                
                // Simulate logout (replace with actual logout API call)
                setTimeout(() => {
                    showNotification("Logged out successfully!", 'success');
                    
                    // Redirect to login page (commented out for demo)
                    // window.location.href = 'login.html';
                }, 1000);
                
                // Clean up event listeners
                confirmYesBtn.removeEventListener('click', handleYes);
                confirmNoBtn.removeEventListener('click', handleNo);
                
                // Close modal
                closeModal(confirmModal);
            };
            
            const handleNo = () => {
                // Clean up event listeners
                confirmYesBtn.removeEventListener('click', handleYes);
                confirmNoBtn.removeEventListener('click', handleNo);
                
                // Close modal
                closeModal(confirmModal);
            };
            
            // Add event listeners
            confirmYesBtn.addEventListener('click', handleYes);
            confirmNoBtn.addEventListener('click', handleNo);
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        // Toggle Sidebar
        if (elements.toggleSidebarBtn) {
            elements.toggleSidebarBtn.addEventListener("click", toggleSidebar);
        }

        // Navigation
        elements.navItems.forEach(item => {
            item.addEventListener("click", function() {
                handleNavigation(this);
            });
        });

        // Theme Toggle
        if (elements.themeToggleBtn) {
            elements.themeToggleBtn.addEventListener("click", toggleDarkMode);
        }
        if (elements.themeToggleIcon) {
            elements.themeToggleIcon.addEventListener("click", toggleDarkMode);
        }

        // Language Toggle
        if (elements.languageToggleBtn) {
            elements.languageToggleBtn.addEventListener("click", toggleLanguage);
        }
        if (elements.languageToggleIcon) {
            elements.languageToggleIcon.addEventListener("click", toggleLanguage);
        }

        // Modal Triggers
        Object.entries(elements.modalTriggers).forEach(([key, trigger]) => {
            if (trigger && elements.modals[key]) {
                trigger.addEventListener("click", () => openModal(elements.modals[key]));
            }
        });

        // Close Modal Buttons
        elements.closeModalBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                closeAllModals();
            });
        });

        // Cancel Buttons
        elements.cancelBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                closeAllModals();
            });
        });

        // Close Modal on Outside Click
        window.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal")) {
                closeAllModals();
            }
        });

        // File Inputs
        elements.fileInputs.forEach(input => {
            input.addEventListener("change", function() {
                handleFileInput(this);
            });
        });

        // Select All Checkboxes
        Object.entries(elements.selectAllCheckboxes).forEach(([key, checkbox]) => {
            if (checkbox) {
                checkbox.addEventListener("change", function() {
                    handleSelectAll(this, elements.itemCheckboxes[key]);
                });
                
                // Update select all state when individual checkboxes change
                elements.itemCheckboxes[key].forEach(itemCheckbox => {
                    itemCheckbox.addEventListener("change", () => {
                        updateSelectAllState(checkbox, elements.itemCheckboxes[key]);
                    });
                });
            }
        });

        // Report Tabs
        elements.reportTabs.forEach(tab => {
            tab.addEventListener("click", function() {
                handleReportTabClick(this);
            });
        });

        // Book Tabs
        if (elements.bookTabs) {
            elements.bookTabs.forEach(tab => {
                tab.addEventListener("click", function() {
                    handleBookTabClick(this);
                });
            });
        }

        // Book Approval Buttons
        if (elements.bookApprovalBtns.approve) {
            elements.bookApprovalBtns.approve.forEach(btn => {
                btn.addEventListener("click", function() {
                    const bookId = this.closest('tr').getAttribute('data-book-id');
                    handleBookApproval(bookId, 'approve');
                });
            });
        }

        if (elements.bookApprovalBtns.reject) {
            elements.bookApprovalBtns.reject.forEach(btn => {
                btn.addEventListener("click", function() {
                    const bookId = this.closest('tr').getAttribute('data-book-id');
                    handleBookApproval(bookId, 'reject');
                });
            });
        }

        if (elements.bookApprovalBtns.view) {
            elements.bookApprovalBtns.view.forEach(btn => {
                btn.addEventListener("click", function() {
                    const bookId = this.closest('tr').getAttribute('data-book-id');
                    viewBookDetails(bookId);
                });
            });
        }

        // Search
        if (elements.searchBtn && elements.searchInput) {
            elements.searchBtn.addEventListener("click", handleSearch);
            elements.searchInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    handleSearch(event);
                }
            });
            
            // Reset search when input is cleared
            elements.searchInput.addEventListener("input", () => {
                if (elements.searchInput.value === "") {
                    resetSearch();
                }
            });
        }

        // Form Submissions
        Object.entries(elements.forms).forEach(([key, form]) => {
            if (form) {
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    let successMessage = "Operation completed successfully!";
                    
                    switch (key) {
                        case "addBook":
                            successMessage = "Book added successfully!";
                            break;
                        case "addMember":
                            successMessage = "Member added successfully!";
                            break;
                        case "addLoan":
                            successMessage = "Loan created successfully!";
                            break;
                        case "addCategory":
                            successMessage = "Category added successfully!";
                            break;
                        case "librarySettings":
                        case "borrowingSettings":
                        case "websiteSettings":
                            successMessage = "Settings saved successfully!";
                            break;
                    }
                    
                    handleFormSubmission(form, successMessage);
                });
            }
        });

        // Logout
        
    }

    // Initialize the application
    function init() {
        // Initialize state from localStorage
        initSidebarState();
        initTheme();
        initLanguage();
        initActivePage();
        initActiveReportTab();
        initActiveBookTab();
        
        // Initialize charts
        initCharts();
        
        // Initialize responsive sidebar for mobile
        handleMobileNavigation();
        
        // Initialize event listeners
        initEventListeners();
        
        // Update pending count
        updatePendingCount();
    }

    // Initialize the application
    init();
});
