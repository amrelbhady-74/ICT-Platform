// =====================================================
// ملف الإعدادات الرئيسي - تحكم كامل في محتوى المنصة
// =====================================================

window.siteConfig = {
  // ========== إعدادات المدير / المعلمين ==========,
  // حساب المدير الرئيسي
  adminUsername: "sysadmin",
  adminPassword: "amr1907",
  siteSignature: " ✍️ تصميم وتطوير: م.عمرو ابراهيم البهادي | جميع الحقوق محفوظة |01112151629",
  
  // قائمة المعلمين الإضافيين
  teachers: [
    { username: "amr", password: "amr1907", fullName: "عمرو ابراهيم", subject: "ICT" },
    { username: "fatma", password: "fatma456", fullName: "فاطمة علي", subject: "الرياضيات" },
    { username: "khaled", password: "khaled789", fullName: "خالد حسن", subject: "العلوم" },
    { username: "sara", password: "sara321", fullName: "سارة محمود", subject: "الفيزياء" },
    { username: "mostafa", password: "mostafa555", fullName: "مصطفى إبراهيم", subject: "ICT" }
  ],
  
  // ========== المحتوى النصي للصفحة الرئيسية ==========
  homeContent: `
    <div style="text-align: center;">
      <h2><i class="fas fa-graduation-cap"></i> مرحباً بكم في منصة تعليم البرمجة</h2>
      <p style="font-size: 1.1rem;">نقدم لكم أفضل المحتوى التعليمي في مادة <strong>ICT (تكنولوجيا المعلومات)</strong> والبرمجة.</p>
      <p>✅ دروس تفاعلية  ✅ فيديوهات شرح  ✅ ملفات تعليمية  ✅ اختبارات</p>
      <hr>
      <p><strong>📢 جديد هذا العام:</strong> تم إضافة مناهج الذكاء الاصطناعي وعلوم البيانات للصفوف الثانوية!</p>
    </div>
  `,

  // ========== قائمة الصفوف الدراسية ==========
  grades: [
    { id: 1, name: "الصف السادس الابتدائي", description: "أساسيات ICT ومبادئ البرمجة", icon: "fa-child", link: "grade6.html", order: 1 },
    { id: 2, name: "الصف الأول الإعدادي", description: "مقدمة في البرمجة والخوارزميات", icon: "fa-book", link: "grade7.html", order: 2 },
    { id: 3, name: "الصف الثاني الإعدادي", description: "لغات البرمجة وتطبيقات بسيطة", icon: "fa-book-open", link: "grade8.html", order: 3 },
    { id: 4, name: "الصف الثالث الإعدادي", description: "مشاريع وتطبيقات متقدمة", icon: "fa-chalkboard-user", link: "grade9.html", order: 4 },
    { id: 5, name: "الصف الأول الثانوي", description: "برمجة الويب وقواعد البيانات", icon: "fa-user-graduate", link: "grade10.html", order: 5 },
    { id: 6, name: "الصف الثاني الثانوي", description: "تطوير تطبيقات وذكاء اصطناعي", icon: "fa-laptop", link: "grade11.html", order: 6 }
  ],

  // ========== المواد الدراسية داخل كل صف ==========
  subjects: {
    "grade6": ["ICT", "الرياضيات", "العلوم", "اللغة العربية"],
    "grade7": ["ICT", "الرياضيات", "العلوم", "الدراسات", "اللغة الإنجليزية"],
    "grade8": ["ICT", "الرياضيات", "العلوم", "الدراسات", "اللغة الإنجليزية"],
    "grade9": ["ICT", "الرياضيات", "العلوم", "الفيزياء"],
    "grade10": ["ICT", "تفاضل وتكامل", "فيزياء", "كيمياء", "أحياء"],
    "grade11": ["ICT", "رياضيات تطبيقية", "فيزياء", "إلكترونيات", "علوم حاسوب"]
  },

  // ========== محتوى كل مادة دراسية ==========
  subjectContent: {
    // مادة ICT (الأساسية)
    "ICT": {
      title: "💻 مادة تكنولوجيا المعلومات والاتصالات (ICT)",
      description: "تعلم أساسيات الحاسوب، الشبكات، البرمجة، وأمن المعلومات. هذه المادة الأساسية في المنهج المصري.",
      featuredVideo: "https://www.youtube.com/embed/watch?v=3GzumUieDPc",
      resources: [
        { type: "pdf", name: "📘 كتاب ICT - المنهج الجديد 2025", url: "#" },
        { type: "link", name: "🌐 منصة إدراك - كورس البرمجة للمبتدئين", url: "https://www.edraak.org" },
        { type: "link", name: "🎮 محاكاة البرمجة عبر Scratch", url: "https://scratch.mit.edu" },
        { type: "link", name: "💻 Code.org - دروس تفاعلية", url: "https://code.org" }
      ],
      extraHTML: `
        <div style="background:#eef2fa; padding:15px; border-radius:20px; margin:20px 0;">
          <h4>⭐ نصائح لدراسة ICT:</h4>
          <ul>
            <li>حل امتحانات السنوات السابقة</li>
            <li>تدرب على برنامج Excel و Word</li>
            <li>تعلم أساسيات الخوارزميات</li>
          </ul>
        </div>
      `
    },
    
    // الرياضيات
    "الرياضيات": {
      title: "📐 مادة الرياضيات",
      description: "شرح الدروس والتمارين التفاعلية لجميع فروع الرياضيات",
      featuredVideo: "https://www.youtube.com/embed/watch?v=gp9UIFLg",
      resources: [
        { type: "pdf", name: "📚 كتاب الرياضيات - النسخة الكاملة", url: "#" },
        { type: "link", name: "🧮 تمارين تفاعلية على خان أكاديمي", url: "https://www.khanacademy.org/math" }
      ],
      extraHTML: "<p>📊 الجبر والهندسة والإحصاء - شروحات مبسطة</p>"
    },
    
    // العلوم
    "العلوم": {
      title: "🔬 مادة العلوم",
      description: "دروس في الفيزياء والكيمياء والأحياء مع تجارب تفاعلية",
      featuredVideo: "https://www.youtube.com/embed/watch?v=QnQe0xW_JI4",
      resources: [
        { type: "pdf", name: "🔬 ملخص العلوم", url: "#" },
        { type: "link", name: "🧪 تجارب علمية افتراضية", url: "https://phet.colorado.edu" }
      ],
      extraHTML: "<p>🧬 اكتشف عالم العلوم من حولك</p>"
    },
    
    // الدراسات
    "الدراسات": {
      title: "🌍 الدراسات الاجتماعية",
      description: "جغرافيا وتاريخ ومواطنة - فهم العالم من حولنا",
      featuredVideo: "",
      resources: [
        { type: "pdf", name: "🗺️ خرائط وملخصات", url: "#" }
      ],
      extraHTML: ""
    },
    
    // اللغة العربية
    "اللغة العربية": {
      title: "📖 اللغة العربية",
      description: "نحو، بلاغة، أدب، ونصوص - لغتنا الجميلة",
      featuredVideo: "",
      resources: [
        { type: "pdf", name: "📝 قواعد النحو", url: "#" }
      ],
      extraHTML: ""
    },
    
    // اللغة الإنجليزية
    "اللغة الإنجليزية": {
      title: "🇬🇧 اللغة الإنجليزية",
      description: "قواعد، محادثة، وقطع فهم - لغة المستقبل",
      featuredVideo: "",
      resources: [
        { type: "link", name: "📚 دروس تفاعلية", url: "https://www.duolingo.com" }
      ],
      extraHTML: ""
    },
    
    // الفيزياء
    "الفيزياء": {
      title: "⚡ الفيزياء",
      description: "قوانين الحركة، الكهرباء، والمغناطيسية - فهم الطبيعة",
      featuredVideo: "https://www.youtube.com/embed/watch?v=8jLOxwy0",
      resources: [
        { type: "pdf", name: "📘 قوانين الفيزياء", url: "#" }
      ],
      extraHTML: "<p>🔌 الكهرباء والمغناطيسية - شروحات بالفيديو</p>"
    },
    
    // الكيمياء
    "كيمياء": {
      title: "🧪 الكيمياء",
      description: "العناصر والمركبات والتفاعلات الكيميائية",
      featuredVideo: "",
      resources: [],
      extraHTML: ""
    },
    
    // أحياء
    "أحياء": {
      title: "🧬 الأحياء",
      description: "الخلية، الجهاز الهضمي، والتنوع البيولوجي",
      featuredVideo: "",
      resources: [],
      extraHTML: ""
    },
    
    // تفاضل وتكامل
    "تفاضل وتكامل": {
      title: "📈 التفاضل والتكامل",
      description: "قواعد الاشتقاق والتكامل وتطبيقاتها في الحياة العملية",
      featuredVideo: "https://www.youtube.com/embed/watch?v=WUv8y5",
      resources: [
        { type: "pdf", name: "📊 ملخص قواعد التفاضل", url: "#" }
      ],
      extraHTML: ""
    },
    
    // رياضيات تطبيقية
    "رياضيات تطبيقية": {
      title: "📊 الرياضيات التطبيقية",
      description: "إحصاء، احتمال، ومصفوفات - تطبيقات في العلوم",
      featuredVideo: "",
      resources: [],
      extraHTML: ""
    },
    
    // إلكترونيات
    "إلكترونيات": {
      title: "🔌 الإلكترونيات",
      description: "دوائر إلكترونية، ترانزستورات، بوابات منطقية",
      featuredVideo: "",
      resources: [],
      extraHTML: ""
    },
    
    // علوم حاسوب
    "علوم حاسوب": {
      title: "💾 علوم الحاسوب",
      description: "هياكل البيانات، خوارزميات، تصميم مواقع وقواعد بيانات",
      featuredVideo: "https://www.youtube.com/embed/watch?v=8jLOxwy0",
      resources: [
        { type: "link", name: "🎓 CS50 من جامعة هارفارد", url: "https://cs50.harvard.edu" },
        { type: "link", name: "💻 W3Schools - تعلم البرمجة", url: "https://www.w3schools.com" }
      ],
      extraHTML: "<p>💡 علوم الحاسوب تفتح لك آفاقاً واسعة في سوق العمل</p>"
    }
  },

  // ========== إعدادات الإعلانات ==========
  ads: {
    enabled: true,
    intervalSeconds: 12,  // تغيير الإعلان كل 12 ثانية
    links: {
      default: "https://www.udemy.com",
      alternative: "https://www.coursera.org",
      special: "https://www.edraak.org"
    },
    messages: [
      "🔥 اشترك الآن في دورة Python الشاملة خصم 50%",
      "📱 تطبيق منصة البرمجة متوفر الآن على Google Play",
      "🎯 مسابقة أفضل مشروع برمجي - الجائزة 5000 جنيه",
      "💻 خصم 30% على جميع كورسات Udemy بكود: EDU2025",
      "📚 احصل على 10 جيجابايت تخزين سحابي مجاني",
      "🎓 منحة مجانية لتعلم البرمجة من وزارة الاتصالات",
      "⭐ دورة React.js كاملة بسعر رمزي 199 جنيه",
      "🚀 تعلم الذكاء الاصطناعي بشهادة معتمدة"
    ]
  },

  // ========== روابط التواصل الاجتماعي ==========
  socialMedia: {
    facebook: "https://facebook.com/yourpage",
    youtube: "https://youtube.com/@yourchannel",
    telegram: "https://t.me/yourgroup",
    whatsapp: "https://wa.me/201234567890"
  },

  // ========== إعدادات الموقع العامة ==========
  siteSettings: {
    siteName: "منصة البرمجة التعليمية ICT",
    siteEmail: "info@ict-platform.com",
    schoolName: "مدرسة المبرمج الحديثة",
    academicYear: "2024/2025",
    maxFileSizeMB: 30,  // أقصى حجم للملفات
    allowTeacherRegistration: false,  // هل يسمح للمعلمين بالتسجيل بأنفسهم؟
    contactPhone: "+20 123 456 7890",
    address: "القاهرة - مصر"
  }
};

// ========== دمج المحتوى المخصص من localStorage إن وجد ==========
if (localStorage.getItem("customHomeContent")) {
  window.siteConfig.homeContent = localStorage.getItem("customHomeContent");
}

// ========== دوال مساعدة ==========

// دالة للتحقق من صلاحيات المعلم
window.checkTeacherAccess = function(username, password) {
  if (username === window.siteConfig.adminUsername && password === window.siteConfig.adminPassword) {
    return { role: "admin", fullName: "المدير العام", subject: "all" };
  }
  const teacher = window.siteConfig.teachers.find(t => t.username === username && t.password === password);
  if (teacher) {
    return { role: "teacher", fullName: teacher.fullName, subject: teacher.subject };
  }
  return null;
};

// دالة للحصول على جميع المواد المتاحة
window.getAllSubjects = function() {
  return Object.keys(window.siteConfig.subjectContent);
};

// دالة لإضافة مادة جديدة
window.addNewSubject = function(subjectName, subjectData) {
  if (!window.siteConfig.subjectContent[subjectName]) {
    window.siteConfig.subjectContent[subjectName] = subjectData;
    localStorage.setItem("customSubject_" + subjectName, JSON.stringify(subjectData));
    return true;
  }
  return false;
};

// دالة لإضافة معلم جديد
window.addNewTeacher = function(username, password, fullName, subject) {
  const exists = window.siteConfig.teachers.find(t => t.username === username);
  if (!exists) {
    window.siteConfig.teachers.push({ username, password, fullName, subject });
    localStorage.setItem("customTeachers", JSON.stringify(window.siteConfig.teachers));
    return true;
  }
  return false;
};

// دالة للحصول على إعلان عشوائي
window.getRandomAd = function() {
  const ads = window.siteConfig.ads.messages;
  return ads[Math.floor(Math.random() * ads.length)];
};

// دالة لتنسيق التاريخ
window.formatDate = function(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
};

