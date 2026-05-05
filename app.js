/**
 * ChungSoft Landing Page – app.js
 * Handles: i18n (5 langs), scroll animations, counter, templates, nav, form, lazy load
 */

/* =====================================================================
   TRANSLATIONS
   ===================================================================== */
const TRANSLATIONS = {
  vi: {
    "nav.services": "Dịch vụ",
    "nav.templates": "Mẫu website",
    "nav.pricing": "Bảng giá",
    "nav.testimonials": "Khách hàng",
    "nav.contact": "Tư vấn miễn phí",
    "hero.badge": "🚀 Dịch vụ thiết kế web #1 Việt Nam",
    "hero.title": "Website đẹp – giá nào cũng có,<br /><span class=\"gradient-text\">chỉ từ <em>500K</em></span>",
    "hero.titleAccent": "chỉ từ <em>500K</em>",
    "hero.sub": "Chuẩn SEO &nbsp;·&nbsp; SSL miễn phí &nbsp;·&nbsp; Responsive &nbsp;·&nbsp; Tối ưu tốc độ",
    "hero.cta1": "Xem mẫu website",
    "hero.cta2": "Nhận tư vấn miễn phí",
    "hero.note": "Từ website 500K đến hệ thống doanh nghiệp – ChungSoft cân hết 💪",
    "stats.projects": "Dự án đã giao",
    "stats.clients": "Khách hàng hài lòng",
    "stats.years": "Năm kinh nghiệm",
    "stats.uptime": "Uptime đảm bảo",
    "services.tag": "Dịch vụ",
    "services.title": "Không chỉ làm web giá rẻ<br /><span class=\"gradient-text\">ChungSoft làm được dự án lớn</span>",
    "services.sub": "Từ website đơn giản đến hệ thống phức tạp, chúng tôi đều có giải pháp phù hợp",
    "services.budget.tag": "Gói Phổ Thông",
    "services.budget.title": "Website Giá Tốt",
    "services.budget.desc": "Phù hợp cho cá nhân, hộ kinh doanh, startup cần online nhanh với chi phí tối thiểu.",
    "services.budget.f1": "✓ Template sẵn có, nhiều lựa chọn",
    "services.budget.f2": "✓ SSL miễn phí (HTTPS)",
    "services.budget.f3": "✓ Responsive mọi thiết bị",
    "services.budget.f4": "✓ Chuẩn SEO cơ bản",
    "services.budget.f5": "✓ Gia hạn hàng năm 500K",
    "services.budget.from": "Chỉ từ",
    "services.budget.cta": "Đặt ngay",
    "services.premium.popular": "Phổ biến nhất",
    "services.premium.tag": "Gói Cao Cấp",
    "services.premium.title": "Thiết Kế Riêng & Hệ Thống Lớn",
    "services.premium.desc": "Thiết kế độc quyền theo thương hiệu, tích hợp backend phức tạp, web app, hệ thống quản lý.",
    "services.premium.f1": "✓ Thiết kế UI/UX riêng cho thương hiệu",
    "services.premium.f2": "✓ Web app / hệ thống quản lý phức tạp",
    "services.premium.f3": "✓ Tích hợp backend, API, database",
    "services.premium.f4": "✓ Tối ưu tốc độ & bảo mật cao cấp",
    "services.premium.f5": "✓ Hỗ trợ kỹ thuật 24/7",
    "services.premium.f6": "✓ Tùy chỉnh không giới hạn",
    "services.premium.from": "Liên hệ",
    "services.premium.price": "Báo giá theo yêu cầu",
    "services.premium.cta": "Nhận tư vấn",
    "templates.tag": "Mẫu Website",
    "templates.title": "Hàng chục mẫu đẹp<br /><span class=\"gradient-text\">sẵn sàng cho bạn</span>",
    "templates.sub": "Chọn mẫu phù hợp, chúng tôi cá nhân hóa theo thương hiệu của bạn trong 24h",
    "templates.all": "Tất cả",
    "templates.shop": "Shop bán hàng",
    "templates.food": "Quán ăn / F&B",
    "templates.landing": "Landing Page",
    "templates.corporate": "Website công ty",
    "templates.more": "Xem thêm 50+ mẫu khác",
    "templates.preview": "Xem trước",
    "pricing.tag": "Bảng Giá",
    "pricing.title": "Giá linh hoạt<br /><span class=\"gradient-text\">ai cũng có thể làm website</span>",
    "pricing.period": "/năm",
    "pricing.cta": "Bắt đầu ngay",
    "pricing.starter.name": "Starter",
    "pricing.starter.desc": "Phù hợp cá nhân, freelancer",
    "pricing.starter.f1": "1 trang landing",
    "pricing.starter.f2": "Template có sẵn",
    "pricing.starter.f3": "SSL miễn phí",
    "pricing.starter.f4": "Responsive",
    "pricing.starter.f5": "Hỗ trợ qua Zalo",
    "pricing.business.badge": "Được chọn nhiều nhất",
    "pricing.business.name": "Business",
    "pricing.business.desc": "Cho doanh nghiệp vừa và nhỏ",
    "pricing.business.f1": "5–10 trang nội dung",
    "pricing.business.f2": "Thiết kế bán tùy chỉnh",
    "pricing.business.f3": "SSL + Backup tự động",
    "pricing.business.f4": "SEO On-page",
    "pricing.business.f5": "Tốc độ tối ưu",
    "pricing.business.f6": "Hỗ trợ ưu tiên",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Liên hệ",
    "pricing.enterprise.desc": "Hệ thống phức tạp, web app lớn",
    "pricing.enterprise.f1": "Thiết kế UI/UX độc quyền",
    "pricing.enterprise.f2": "Backend + API tùy chỉnh",
    "pricing.enterprise.f3": "Tích hợp hệ thống CRM, ERP",
    "pricing.enterprise.f4": "Bảo mật cao cấp",
    "pricing.enterprise.f5": "SLA & hỗ trợ 24/7",
    "pricing.enterprise.f6": "Không giới hạn tính năng",
    "pricing.enterprise.cta": "Báo giá ngay",
    "benefits.tag": "Tại sao chọn ChungSoft?",
    "benefits.title": "Lợi ích vượt trội<br /><span class=\"gradient-text\">không đâu có được</span>",
    "benefits.ssl.title": "SSL Miễn Phí",
    "benefits.ssl.desc": "HTTPS bảo mật trên mọi gói, tăng uy tín và thứ hạng SEO.",
    "benefits.speed.title": "Tốc Độ Siêu Nhanh",
    "benefits.speed.desc": "Tối ưu Core Web Vitals, điểm Google PageSpeed 90+.",
    "benefits.responsive.title": "Responsive 100%",
    "benefits.responsive.desc": "Hiển thị hoàn hảo trên mọi thiết bị, từ mobile đến 4K.",
    "benefits.seo.title": "Chuẩn SEO",
    "benefits.seo.desc": "Cấu trúc HTML chuẩn, meta tags, schema, sitemap tự động.",
    "benefits.price.title": "Giá Linh Hoạt",
    "benefits.price.desc": "Từ 500K đến không giới hạn – luôn có gói phù hợp với bạn.",
    "benefits.support.title": "Hỗ Trợ Nhanh",
    "benefits.support.desc": "Phản hồi trong 2h, hỗ trợ Zalo/email mọi lúc mọi nơi.",
    "testimonials.tag": "Khách hàng nói gì?",
    "testimonials.title": "Hơn 300 khách hàng<br /><span class=\"gradient-text\">tin tưởng ChungSoft</span>",
    "testimonials.t1.text": "\"Tôi chỉ có ngân sách 500K nhưng ChungSoft làm cho tôi một website cực đẹp, chuyên nghiệp. Khách hàng vào là hỏi mua ngay!\"",
    "testimonials.t1.name": "Nguyễn Thị Lan",
    "testimonials.t1.role": "Chủ shop thời trang online",
    "testimonials.t2.text": "\"Hệ thống đặt bàn online của nhà hàng chúng tôi được ChungSoft xây dựng rất chuyên nghiệp. Tích hợp thanh toán, quản lý order – hoàn hảo!\"",
    "testimonials.t2.name": "Trần Văn Minh",
    "testimonials.t2.role": "Giám đốc chuỗi nhà hàng",
    "testimonials.t3.text": "\"Điểm PageSpeed của website sau khi ChungSoft tối ưu lên 97/100. Tỷ lệ chuyển đổi tăng gấp đôi trong tháng đầu!\"",
    "testimonials.t3.name": "Phạm Đức Hùng",
    "testimonials.t3.role": "Marketing Manager, TechCorp",
    "testimonials.t4.text": "\"Mình cần gấp landing page cho chiến dịch. ChungSoft giao trong 24h, đẹp, nhanh, đúng ý. Sẽ làm việc lâu dài!\"",
    "testimonials.t4.name": "Lê Thị Hoa",
    "testimonials.t4.role": "Freelance Designer",
    "testimonials.t5.text": "\"ERP nội bộ công ty được ChungSoft phát triển từ đầu. Tích hợp kho, nhân sự, kế toán – xử lý được 10.000 đơn/ngày mượt mà.\"",
    "testimonials.t5.name": "Vũ Thanh Sơn",
    "testimonials.t5.role": "CTO, Logistics Vietnam",
    "contact.tag": "Liên hệ",
    "contact.title": "Bắt đầu dự án<br /><span class=\"gradient-text\">của bạn hôm nay</span>",
    "contact.sub": "Tư vấn hoàn toàn miễn phí. Chúng tôi phản hồi trong vòng 2 giờ.",
    "contact.phone": "Gọi ngay",
    "contact.zalo": "Chat ngay trên Zalo",
    "contact.form.name": "Tên của bạn",
    "contact.form.phone": "Số điện thoại",
    "contact.form.budget": "Ngân sách dự kiến",
    "contact.form.b1": "500K – 1 triệu",
    "contact.form.b2": "1 – 5 triệu",
    "contact.form.b3": "5 – 20 triệu",
    "contact.form.b4": "Trên 20 triệu",
    "contact.form.message": "Mô tả nhu cầu",
    "contact.form.submit": "Gửi yêu cầu tư vấn miễn phí →",
    "contact.form.note": "🔒 Thông tin của bạn được bảo mật tuyệt đối",
    "footer.desc": "Thiết kế website đẹp – chuyên nghiệp – giá từ 500K. Từ cá nhân đến doanh nghiệp lớn.",
    "footer.services": "Dịch vụ",
    "footer.budget": "Website giá rẻ",
    "footer.premium": "Thiết kế cao cấp",
    "footer.webapp": "Web App / Hệ thống",
    "footer.templates": "Xem mẫu website",
    "footer.company": "Công ty",
    "footer.about": "Về ChungSoft",
    "footer.reviews": "Đánh giá",
    "footer.pricing": "Bảng giá",
    "footer.contact": "Liên hệ",
    "footer.contactTitle": "Liên hệ",
    "footer.address": "🏢 TP. Hồ Chí Minh, Việt Nam",
    "footer.copy": "© 2026 ChungSoft. Tất cả quyền được bảo lưu.",
    "footer.made": "Làm với ❤️ tại Việt Nam",
    "floating.cta": "💬 Tư vấn miễn phí",
  },
  en: {
    "nav.services": "Services",
    "nav.templates": "Templates",
    "nav.pricing": "Pricing",
    "nav.testimonials": "Clients",
    "nav.contact": "Free Consultation",
    "hero.badge": "🚀 #1 Web Design Service in Vietnam",
    "hero.title": "Beautiful websites – any budget,<br /><span class=\"gradient-text\">from just <em>500K VND</em></span>",
    "hero.sub": "SEO Ready &nbsp;·&nbsp; Free SSL &nbsp;·&nbsp; Responsive &nbsp;·&nbsp; Speed Optimized",
    "hero.cta1": "View Templates",
    "hero.cta2": "Free Consultation",
    "hero.note": "From 500K websites to enterprise systems – ChungSoft handles it all 💪",
    "stats.projects": "Projects Delivered",
    "stats.clients": "Happy Clients",
    "stats.years": "Years Experience",
    "stats.uptime": "Uptime Guaranteed",
    "services.tag": "Services",
    "services.title": "Not just budget websites –<br /><span class=\"gradient-text\">ChungSoft handles large projects too</span>",
    "services.sub": "From simple websites to complex systems, we have the right solution for you",
    "services.budget.tag": "Standard Package",
    "services.budget.title": "Affordable Websites",
    "services.budget.desc": "Perfect for individuals, small businesses, and startups needing to go online quickly at minimal cost.",
    "services.budget.f1": "✓ Ready-made templates, many choices",
    "services.budget.f2": "✓ Free SSL (HTTPS)",
    "services.budget.f3": "✓ Responsive on all devices",
    "services.budget.f4": "✓ Basic SEO",
    "services.budget.f5": "✓ Annual renewal at 500K",
    "services.budget.from": "Starting from",
    "services.budget.cta": "Order Now",
    "services.premium.popular": "Most Popular",
    "services.premium.tag": "Premium Package",
    "services.premium.title": "Custom Design & Large Systems",
    "services.premium.desc": "Exclusive brand design, complex backend integration, web apps, management systems.",
    "services.premium.f1": "✓ Custom UI/UX design for your brand",
    "services.premium.f2": "✓ Web apps / complex management systems",
    "services.premium.f3": "✓ Backend, API, database integration",
    "services.premium.f4": "✓ Speed optimization & enterprise security",
    "services.premium.f5": "✓ 24/7 technical support",
    "services.premium.f6": "✓ Unlimited customization",
    "services.premium.from": "Contact us",
    "services.premium.price": "Custom quote on request",
    "services.premium.cta": "Get Consultation",
    "templates.tag": "Website Templates",
    "templates.title": "Dozens of beautiful templates<br /><span class=\"gradient-text\">ready for you</span>",
    "templates.sub": "Choose a template, we personalize it to your brand within 24 hours",
    "templates.all": "All",
    "templates.shop": "Online Shop",
    "templates.food": "Restaurant / F&B",
    "templates.landing": "Landing Page",
    "templates.corporate": "Corporate Website",
    "templates.more": "View 50+ More Templates",
    "templates.preview": "Preview",
    "pricing.tag": "Pricing",
    "pricing.title": "Flexible pricing –<br /><span class=\"gradient-text\">everyone can have a website</span>",
    "pricing.period": "/year",
    "pricing.cta": "Get Started",
    "pricing.starter.name": "Starter",
    "pricing.starter.desc": "For individuals and freelancers",
    "pricing.starter.f1": "1 landing page",
    "pricing.starter.f2": "Ready-made template",
    "pricing.starter.f3": "Free SSL",
    "pricing.starter.f4": "Responsive",
    "pricing.starter.f5": "Zalo support",
    "pricing.business.badge": "Most Chosen",
    "pricing.business.name": "Business",
    "pricing.business.desc": "For small and medium businesses",
    "pricing.business.f1": "5–10 content pages",
    "pricing.business.f2": "Semi-custom design",
    "pricing.business.f3": "SSL + Auto backup",
    "pricing.business.f4": "On-page SEO",
    "pricing.business.f5": "Speed optimized",
    "pricing.business.f6": "Priority support",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Contact Us",
    "pricing.enterprise.desc": "Complex systems, large web apps",
    "pricing.enterprise.f1": "Exclusive UI/UX design",
    "pricing.enterprise.f2": "Custom backend + API",
    "pricing.enterprise.f3": "CRM, ERP integration",
    "pricing.enterprise.f4": "Enterprise security",
    "pricing.enterprise.f5": "SLA & 24/7 support",
    "pricing.enterprise.f6": "Unlimited features",
    "pricing.enterprise.cta": "Get Quote",
    "benefits.tag": "Why ChungSoft?",
    "benefits.title": "Outstanding benefits<br /><span class=\"gradient-text\">you won't find elsewhere</span>",
    "benefits.ssl.title": "Free SSL",
    "benefits.ssl.desc": "HTTPS security on every plan, boosting trust and SEO rankings.",
    "benefits.speed.title": "Lightning Fast",
    "benefits.speed.desc": "Optimized Core Web Vitals, Google PageSpeed score 90+.",
    "benefits.responsive.title": "100% Responsive",
    "benefits.responsive.desc": "Perfect display on all devices, from mobile to 4K.",
    "benefits.seo.title": "SEO Ready",
    "benefits.seo.desc": "Clean HTML structure, meta tags, schema, auto sitemap.",
    "benefits.price.title": "Flexible Pricing",
    "benefits.price.desc": "From 500K to unlimited – always a plan that fits your needs.",
    "benefits.support.title": "Fast Support",
    "benefits.support.desc": "Response within 2h, Zalo/email support anytime, anywhere.",
    "testimonials.tag": "What our clients say",
    "testimonials.title": "Over 300 clients<br /><span class=\"gradient-text\">trust ChungSoft</span>",
    "testimonials.t1.text": "\"I only had a 500K budget but ChungSoft made me a stunning, professional website. Customers visit and buy immediately!\"",
    "testimonials.t1.name": "Nguyen Thi Lan",
    "testimonials.t1.role": "Online Fashion Shop Owner",
    "testimonials.t2.text": "\"Our restaurant's online booking system was built very professionally by ChungSoft. Payment integration, order management – perfect!\"",
    "testimonials.t2.name": "Tran Van Minh",
    "testimonials.t2.role": "Director, Restaurant Chain",
    "testimonials.t3.text": "\"Our PageSpeed score went to 97/100 after ChungSoft's optimization. Conversion rate doubled in the first month!\"",
    "testimonials.t3.name": "Pham Duc Hung",
    "testimonials.t3.role": "Marketing Manager, TechCorp",
    "testimonials.t4.text": "\"I urgently needed a landing page for a campaign. ChungSoft delivered in 24h – beautiful, fast, exactly what I wanted.\"",
    "testimonials.t4.name": "Le Thi Hoa",
    "testimonials.t4.role": "Freelance Designer",
    "testimonials.t5.text": "\"Our internal ERP was developed from scratch by ChungSoft. Warehouse, HR, accounting integrated – handles 10,000 orders/day smoothly.\"",
    "testimonials.t5.name": "Vu Thanh Son",
    "testimonials.t5.role": "CTO, Logistics Vietnam",
    "contact.tag": "Contact",
    "contact.title": "Start your project<br /><span class=\"gradient-text\">today</span>",
    "contact.sub": "Completely free consultation. We respond within 2 hours.",
    "contact.phone": "Call Now",
    "contact.zalo": "Chat on Zalo",
    "contact.form.name": "Your Name",
    "contact.form.phone": "Phone Number",
    "contact.form.budget": "Expected Budget",
    "contact.form.b1": "500K – 1M VND",
    "contact.form.b2": "1M – 5M VND",
    "contact.form.b3": "5M – 20M VND",
    "contact.form.b4": "Over 20M VND",
    "contact.form.message": "Describe your needs",
    "contact.form.submit": "Send Free Consultation Request →",
    "contact.form.note": "🔒 Your information is completely confidential",
    "footer.desc": "Beautiful, professional websites from 500K VND. From individuals to large enterprises.",
    "footer.services": "Services",
    "footer.budget": "Affordable Websites",
    "footer.premium": "Premium Design",
    "footer.webapp": "Web App / Systems",
    "footer.templates": "View Templates",
    "footer.company": "Company",
    "footer.about": "About ChungSoft",
    "footer.reviews": "Reviews",
    "footer.pricing": "Pricing",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.address": "🏢 Ho Chi Minh City, Vietnam",
    "footer.copy": "© 2026 ChungSoft. All rights reserved.",
    "footer.made": "Made with ❤️ in Vietnam",
    "floating.cta": "💬 Free Consultation",
  },
  ko: {
    "nav.services": "서비스",
    "nav.templates": "템플릿",
    "nav.pricing": "요금제",
    "nav.testimonials": "고객 후기",
    "nav.contact": "무료 상담",
    "hero.badge": "🚀 베트남 #1 웹 디자인 서비스",
    "hero.title": "아름다운 웹사이트 – 모든 예산,<br /><span class=\"gradient-text\"><em>500K VND</em>부터</span>",
    "hero.sub": "SEO 최적화 &nbsp;·&nbsp; 무료 SSL &nbsp;·&nbsp; 반응형 &nbsp;·&nbsp; 속도 최적화",
    "hero.cta1": "템플릿 보기",
    "hero.cta2": "무료 상담",
    "hero.note": "500K 웹사이트부터 기업 시스템까지 – ChungSoft가 다 해냅니다 💪",
    "stats.projects": "완료된 프로젝트",
    "stats.clients": "만족한 고객",
    "stats.years": "년 경험",
    "stats.uptime": "업타임 보장",
    "services.tag": "서비스",
    "services.title": "단순히 저렴한 웹사이트만이 아닙니다 –<br /><span class=\"gradient-text\">ChungSoft는 대규모 프로젝트도 처리합니다</span>",
    "services.sub": "간단한 웹사이트부터 복잡한 시스템까지 적합한 솔루션을 제공합니다",
    "services.budget.tag": "기본 패키지",
    "services.budget.title": "저렴한 웹사이트",
    "services.budget.desc": "최소 비용으로 빠르게 온라인에 진출해야 하는 개인, 소규모 사업자, 스타트업에 적합합니다.",
    "services.budget.f1": "✓ 다양한 기성 템플릿",
    "services.budget.f2": "✓ 무료 SSL (HTTPS)",
    "services.budget.f3": "✓ 모든 기기에서 반응형",
    "services.budget.f4": "✓ 기본 SEO",
    "services.budget.f5": "✓ 연간 갱신 500K",
    "services.budget.from": "시작가",
    "services.budget.cta": "지금 주문",
    "services.premium.popular": "가장 인기",
    "services.premium.tag": "프리미엄 패키지",
    "services.premium.title": "맞춤 디자인 & 대형 시스템",
    "services.premium.desc": "브랜드 전용 디자인, 복잡한 백엔드 통합, 웹 앱, 관리 시스템.",
    "services.premium.f1": "✓ 브랜드 전용 UI/UX 디자인",
    "services.premium.f2": "✓ 웹 앱 / 복잡한 관리 시스템",
    "services.premium.f3": "✓ 백엔드, API, 데이터베이스 통합",
    "services.premium.f4": "✓ 속도 최적화 & 엔터프라이즈 보안",
    "services.premium.f5": "✓ 24/7 기술 지원",
    "services.premium.f6": "✓ 무제한 커스터마이징",
    "services.premium.from": "문의하기",
    "services.premium.price": "요청에 따른 견적",
    "services.premium.cta": "상담 받기",
    "templates.tag": "웹사이트 템플릿",
    "templates.title": "수십 개의 아름다운 템플릿<br /><span class=\"gradient-text\">지금 바로 시작하세요</span>",
    "templates.sub": "원하는 템플릿을 선택하면 24시간 내에 브랜드에 맞게 개인화해 드립니다",
    "templates.all": "전체",
    "templates.shop": "온라인 쇼핑몰",
    "templates.food": "레스토랑 / F&B",
    "templates.landing": "랜딩 페이지",
    "templates.corporate": "기업 웹사이트",
    "templates.more": "50개 이상의 템플릿 보기",
    "templates.preview": "미리보기",
    "pricing.tag": "요금제",
    "pricing.title": "유연한 요금제 –<br /><span class=\"gradient-text\">누구나 웹사이트를 만들 수 있습니다</span>",
    "pricing.period": "/년",
    "pricing.cta": "시작하기",
    "pricing.starter.name": "스타터",
    "pricing.starter.desc": "개인 및 프리랜서에게 적합",
    "pricing.starter.f1": "랜딩 페이지 1개",
    "pricing.starter.f2": "기성 템플릿",
    "pricing.starter.f3": "무료 SSL",
    "pricing.starter.f4": "반응형",
    "pricing.starter.f5": "Zalo 지원",
    "pricing.business.badge": "가장 많이 선택",
    "pricing.business.name": "비즈니스",
    "pricing.business.desc": "중소기업을 위한",
    "pricing.business.f1": "5–10 콘텐츠 페이지",
    "pricing.business.f2": "반맞춤 디자인",
    "pricing.business.f3": "SSL + 자동 백업",
    "pricing.business.f4": "온페이지 SEO",
    "pricing.business.f5": "속도 최적화",
    "pricing.business.f6": "우선 지원",
    "pricing.enterprise.name": "엔터프라이즈",
    "pricing.enterprise.price": "문의하기",
    "pricing.enterprise.desc": "복잡한 시스템, 대형 웹 앱",
    "pricing.enterprise.f1": "전용 UI/UX 디자인",
    "pricing.enterprise.f2": "맞춤 백엔드 + API",
    "pricing.enterprise.f3": "CRM, ERP 통합",
    "pricing.enterprise.f4": "엔터프라이즈 보안",
    "pricing.enterprise.f5": "SLA & 24/7 지원",
    "pricing.enterprise.f6": "무제한 기능",
    "pricing.enterprise.cta": "견적 받기",
    "benefits.tag": "왜 ChungSoft인가?",
    "benefits.title": "탁월한 혜택<br /><span class=\"gradient-text\">어디서도 찾을 수 없는</span>",
    "benefits.ssl.title": "무료 SSL",
    "benefits.ssl.desc": "모든 플랜에 HTTPS 보안, 신뢰도와 SEO 순위 향상.",
    "benefits.speed.title": "초고속",
    "benefits.speed.desc": "Core Web Vitals 최적화, Google PageSpeed 90점 이상.",
    "benefits.responsive.title": "100% 반응형",
    "benefits.responsive.desc": "모바일부터 4K까지 모든 기기에서 완벽 표시.",
    "benefits.seo.title": "SEO 준비",
    "benefits.seo.desc": "깔끔한 HTML 구조, 메타 태그, 스키마, 자동 사이트맵.",
    "benefits.price.title": "유연한 요금",
    "benefits.price.desc": "500K부터 무제한까지 – 항상 맞는 플랜이 있습니다.",
    "benefits.support.title": "빠른 지원",
    "benefits.support.desc": "2시간 내 응답, 언제 어디서나 Zalo/이메일 지원.",
    "testimonials.tag": "고객들이 말하는 것",
    "testimonials.title": "300명 이상의 고객이<br /><span class=\"gradient-text\">ChungSoft를 신뢰합니다</span>",
    "testimonials.t1.text": "\"500K 예산밖에 없었지만 ChungSoft가 정말 아름답고 전문적인 웹사이트를 만들어 주었어요. 방문객들이 바로 구매해요!\"",
    "testimonials.t1.name": "Nguyen Thi Lan",
    "testimonials.t1.role": "온라인 패션 쇼핑몰 운영자",
    "testimonials.t2.text": "\"레스토랑 온라인 예약 시스템을 ChungSoft가 매우 전문적으로 구축해 주었어요. 결제 통합, 주문 관리 – 완벽해요!\"",
    "testimonials.t2.name": "Tran Van Minh",
    "testimonials.t2.role": "레스토랑 체인 대표",
    "testimonials.t3.text": "\"ChungSoft 최적화 후 PageSpeed가 97/100으로 올랐어요. 첫 달 전환율이 두 배가 됐습니다!\"",
    "testimonials.t3.name": "Pham Duc Hung",
    "testimonials.t3.role": "마케팅 매니저, TechCorp",
    "testimonials.t4.text": "\"캠페인용 랜딩 페이지가 급히 필요했어요. ChungSoft가 24시간 만에 납품 – 예쁘고, 빠르고, 딱 원하는 대로!\"",
    "testimonials.t4.name": "Le Thi Hoa",
    "testimonials.t4.role": "프리랜서 디자이너",
    "testimonials.t5.text": "\"ChungSoft가 처음부터 사내 ERP를 개발해 주었어요. 창고, 인사, 회계 통합 – 하루 10,000건 주문을 매끄럽게 처리합니다.\"",
    "testimonials.t5.name": "Vu Thanh Son",
    "testimonials.t5.role": "CTO, Logistics Vietnam",
    "contact.tag": "연락하기",
    "contact.title": "오늘 바로<br /><span class=\"gradient-text\">프로젝트를 시작하세요</span>",
    "contact.sub": "완전 무료 상담. 2시간 내에 응답드립니다.",
    "contact.phone": "지금 전화",
    "contact.zalo": "Zalo로 채팅",
    "contact.form.name": "이름",
    "contact.form.phone": "전화번호",
    "contact.form.budget": "예상 예산",
    "contact.form.b1": "500K – 100만 VND",
    "contact.form.b2": "100만 – 500만 VND",
    "contact.form.b3": "500만 – 2,000만 VND",
    "contact.form.b4": "2,000만 VND 이상",
    "contact.form.message": "요구사항 설명",
    "contact.form.submit": "무료 상담 요청 보내기 →",
    "contact.form.note": "🔒 귀하의 정보는 완전히 기밀입니다",
    "footer.desc": "아름답고 전문적인 웹사이트, 500K VND부터. 개인부터 대기업까지.",
    "footer.services": "서비스",
    "footer.budget": "저렴한 웹사이트",
    "footer.premium": "프리미엄 디자인",
    "footer.webapp": "웹 앱 / 시스템",
    "footer.templates": "템플릿 보기",
    "footer.company": "회사",
    "footer.about": "ChungSoft 소개",
    "footer.reviews": "후기",
    "footer.pricing": "요금제",
    "footer.contact": "연락하기",
    "footer.contactTitle": "연락처",
    "footer.address": "🏢 호치민시, 베트남",
    "footer.copy": "© 2026 ChungSoft. 모든 권리 보유.",
    "footer.made": "베트남에서 ❤️ 으로 만들었습니다",
    "floating.cta": "💬 무료 상담",
  },
  zh: {
    "nav.services": "服务",
    "nav.templates": "模板",
    "nav.pricing": "价格",
    "nav.testimonials": "客户评价",
    "nav.contact": "免费咨询",
    "hero.badge": "🚀 越南排名第一的网站设计服务",
    "hero.title": "精美网站 – 任何预算,<br /><span class=\"gradient-text\">低至 <em>500K越盾</em></span>",
    "hero.sub": "SEO优化 &nbsp;·&nbsp; 免费SSL &nbsp;·&nbsp; 响应式 &nbsp;·&nbsp; 速度优化",
    "hero.cta1": "查看模板",
    "hero.cta2": "免费咨询",
    "hero.note": "从500K网站到企业系统 – ChungSoft全都搞定 💪",
    "stats.projects": "完成项目",
    "stats.clients": "满意客户",
    "stats.years": "年经验",
    "stats.uptime": "正常运行时间保证",
    "services.tag": "服务",
    "services.title": "不只是廉价网站 –<br /><span class=\"gradient-text\">ChungSoft还能处理大型项目</span>",
    "services.sub": "从简单网站到复杂系统，我们都有合适的解决方案",
    "services.budget.tag": "标准套餐",
    "services.budget.title": "实惠网站",
    "services.budget.desc": "适合需要以最低成本快速上线的个人、小企业和初创公司。",
    "services.budget.f1": "✓ 多种现成模板",
    "services.budget.f2": "✓ 免费SSL (HTTPS)",
    "services.budget.f3": "✓ 所有设备响应式",
    "services.budget.f4": "✓ 基础SEO",
    "services.budget.f5": "✓ 年度续费500K",
    "services.budget.from": "仅需",
    "services.budget.cta": "立即订购",
    "services.premium.popular": "最受欢迎",
    "services.premium.tag": "高级套餐",
    "services.premium.title": "定制设计 & 大型系统",
    "services.premium.desc": "品牌专属设计，复杂后端集成，Web应用，管理系统。",
    "services.premium.f1": "✓ 品牌专属UI/UX设计",
    "services.premium.f2": "✓ Web应用/复杂管理系统",
    "services.premium.f3": "✓ 后端、API、数据库集成",
    "services.premium.f4": "✓ 速度优化 & 企业级安全",
    "services.premium.f5": "✓ 24/7技术支持",
    "services.premium.f6": "✓ 无限定制",
    "services.premium.from": "联系我们",
    "services.premium.price": "按需报价",
    "services.premium.cta": "获取咨询",
    "templates.tag": "网站模板",
    "templates.title": "数十个精美模板<br /><span class=\"gradient-text\">随时为您服务</span>",
    "templates.sub": "选择模板，我们在24小时内根据您的品牌个性化定制",
    "templates.all": "全部",
    "templates.shop": "网店",
    "templates.food": "餐厅/餐饮",
    "templates.landing": "落地页",
    "templates.corporate": "企业网站",
    "templates.more": "查看50+更多模板",
    "templates.preview": "预览",
    "pricing.tag": "价格",
    "pricing.title": "灵活定价 –<br /><span class=\"gradient-text\">人人都能拥有网站</span>",
    "pricing.period": "/年",
    "pricing.cta": "立即开始",
    "pricing.starter.name": "入门版",
    "pricing.starter.desc": "适合个人和自由职业者",
    "pricing.starter.f1": "1个落地页",
    "pricing.starter.f2": "现成模板",
    "pricing.starter.f3": "免费SSL",
    "pricing.starter.f4": "响应式",
    "pricing.starter.f5": "Zalo支持",
    "pricing.business.badge": "最受欢迎",
    "pricing.business.name": "商业版",
    "pricing.business.desc": "适合中小型企业",
    "pricing.business.f1": "5–10个内容页面",
    "pricing.business.f2": "半定制设计",
    "pricing.business.f3": "SSL + 自动备份",
    "pricing.business.f4": "页面SEO",
    "pricing.business.f5": "速度优化",
    "pricing.business.f6": "优先支持",
    "pricing.enterprise.name": "企业版",
    "pricing.enterprise.price": "联系我们",
    "pricing.enterprise.desc": "复杂系统，大型Web应用",
    "pricing.enterprise.f1": "专属UI/UX设计",
    "pricing.enterprise.f2": "定制后端+API",
    "pricing.enterprise.f3": "CRM、ERP集成",
    "pricing.enterprise.f4": "企业级安全",
    "pricing.enterprise.f5": "SLA & 24/7支持",
    "pricing.enterprise.f6": "无限功能",
    "pricing.enterprise.cta": "获取报价",
    "benefits.tag": "为什么选择ChungSoft？",
    "benefits.title": "卓越优势<br /><span class=\"gradient-text\">其他地方找不到的</span>",
    "benefits.ssl.title": "免费SSL",
    "benefits.ssl.desc": "每个套餐都有HTTPS安全，提升信任度和SEO排名。",
    "benefits.speed.title": "极速加载",
    "benefits.speed.desc": "优化Core Web Vitals，Google PageSpeed 90+分。",
    "benefits.responsive.title": "100%响应式",
    "benefits.responsive.desc": "从手机到4K屏幕完美显示。",
    "benefits.seo.title": "SEO就绪",
    "benefits.seo.desc": "干净HTML结构，Meta标签，Schema，自动Sitemap。",
    "benefits.price.title": "灵活价格",
    "benefits.price.desc": "从500K到无限 – 总有适合您的套餐。",
    "benefits.support.title": "快速支持",
    "benefits.support.desc": "2小时内响应，随时随地Zalo/邮件支持。",
    "testimonials.tag": "客户怎么说",
    "testimonials.title": "超过300位客户<br /><span class=\"gradient-text\">信任ChungSoft</span>",
    "testimonials.t1.text": "\"我只有500K预算，但ChungSoft给我做了一个非常漂亮、专业的网站。客户一进来就问购买了！\"",
    "testimonials.t1.name": "Nguyen Thi Lan",
    "testimonials.t1.role": "在线时装店主",
    "testimonials.t2.text": "\"我们餐厅的在线预订系统由ChungSoft非常专业地构建。支付集成，订单管理 – 完美！\"",
    "testimonials.t2.name": "Tran Van Minh",
    "testimonials.t2.role": "餐厅连锁总监",
    "testimonials.t3.text": "\"ChungSoft优化后我们的PageSpeed达到了97/100。第一个月转化率翻了一番！\"",
    "testimonials.t3.name": "Pham Duc Hung",
    "testimonials.t3.role": "营销经理, TechCorp",
    "testimonials.t4.text": "\"我急需为活动做落地页。ChungSoft在24小时内交付 – 漂亮、快速、完全符合我的要求。\"",
    "testimonials.t4.name": "Le Thi Hoa",
    "testimonials.t4.role": "自由设计师",
    "testimonials.t5.text": "\"ChungSoft从头开始开发了我们的内部ERP。仓库、人事、财务集成 – 每天顺畅处理10,000个订单。\"",
    "testimonials.t5.name": "Vu Thanh Son",
    "testimonials.t5.role": "CTO, Logistics Vietnam",
    "contact.tag": "联系我们",
    "contact.title": "今天就开始<br /><span class=\"gradient-text\">您的项目</span>",
    "contact.sub": "完全免费咨询。我们在2小时内回复。",
    "contact.phone": "立即致电",
    "contact.zalo": "在Zalo上聊天",
    "contact.form.name": "您的姓名",
    "contact.form.phone": "电话号码",
    "contact.form.budget": "预期预算",
    "contact.form.b1": "500K – 100万越盾",
    "contact.form.b2": "100万 – 500万越盾",
    "contact.form.b3": "500万 – 2000万越盾",
    "contact.form.b4": "2000万越盾以上",
    "contact.form.message": "描述您的需求",
    "contact.form.submit": "发送免费咨询请求 →",
    "contact.form.note": "🔒 您的信息完全保密",
    "footer.desc": "精美、专业的网站，从500K越盾起。从个人到大型企业。",
    "footer.services": "服务",
    "footer.budget": "实惠网站",
    "footer.premium": "高级设计",
    "footer.webapp": "Web应用/系统",
    "footer.templates": "查看模板",
    "footer.company": "公司",
    "footer.about": "关于ChungSoft",
    "footer.reviews": "评价",
    "footer.pricing": "价格",
    "footer.contact": "联系我们",
    "footer.contactTitle": "联系方式",
    "footer.address": "🏢 越南胡志明市",
    "footer.copy": "© 2026 ChungSoft. 保留所有权利。",
    "footer.made": "在越南用❤️制作",
    "floating.cta": "💬 免费咨询",
  },
  ja: {
    "nav.services": "サービス",
    "nav.templates": "テンプレート",
    "nav.pricing": "料金",
    "nav.testimonials": "お客様の声",
    "nav.contact": "無料相談",
    "hero.badge": "🚀 ベトナムNo.1 ウェブデザインサービス",
    "hero.title": "美しいウェブサイト – どんな予算でも,<br /><span class=\"gradient-text\"><em>500K VND</em>から</span>",
    "hero.sub": "SEO対応 &nbsp;·&nbsp; 無料SSL &nbsp;·&nbsp; レスポンシブ &nbsp;·&nbsp; 速度最適化",
    "hero.cta1": "テンプレートを見る",
    "hero.cta2": "無料相談",
    "hero.note": "500Kサイトから企業システムまで – ChungSoftにお任せ 💪",
    "stats.projects": "完了プロジェクト",
    "stats.clients": "満足のお客様",
    "stats.years": "年の経験",
    "stats.uptime": "稼働率保証",
    "services.tag": "サービス",
    "services.title": "安いウェブサイトだけじゃない –<br /><span class=\"gradient-text\">ChungSoftは大規模プロジェクトも対応</span>",
    "services.sub": "シンプルなウェブサイトから複雑なシステムまで、適切なソリューションをご提供",
    "services.budget.tag": "スタンダードプラン",
    "services.budget.title": "リーズナブルなウェブサイト",
    "services.budget.desc": "最低コストで素早くオンライン展開したい個人・中小企業・スタートアップに最適。",
    "services.budget.f1": "✓ 豊富な既製テンプレート",
    "services.budget.f2": "✓ 無料SSL (HTTPS)",
    "services.budget.f3": "✓ 全デバイス対応レスポンシブ",
    "services.budget.f4": "✓ 基本SEO対応",
    "services.budget.f5": "✓ 年間更新500K",
    "services.budget.from": "開始価格",
    "services.budget.cta": "今すぐ注文",
    "services.premium.popular": "最人気",
    "services.premium.tag": "プレミアムプラン",
    "services.premium.title": "カスタムデザイン & 大規模システム",
    "services.premium.desc": "ブランド専用デザイン、複雑なバックエンド統合、Webアプリ、管理システム。",
    "services.premium.f1": "✓ ブランド専用UI/UXデザイン",
    "services.premium.f2": "✓ Webアプリ/複雑な管理システム",
    "services.premium.f3": "✓ バックエンド、API、データベース統合",
    "services.premium.f4": "✓ 速度最適化 & エンタープライズセキュリティ",
    "services.premium.f5": "✓ 24/7技術サポート",
    "services.premium.f6": "✓ 無制限カスタマイズ",
    "services.premium.from": "お問い合わせ",
    "services.premium.price": "ご要望に応じてお見積り",
    "services.premium.cta": "相談する",
    "templates.tag": "ウェブサイトテンプレート",
    "templates.title": "数十の美しいテンプレート<br /><span class=\"gradient-text\">すぐに始められます</span>",
    "templates.sub": "テンプレートを選ぶと、24時間以内にブランドに合わせてカスタマイズします",
    "templates.all": "すべて",
    "templates.shop": "ネットショップ",
    "templates.food": "レストラン/F&B",
    "templates.landing": "ランディングページ",
    "templates.corporate": "企業ウェブサイト",
    "templates.more": "50以上のテンプレートを見る",
    "templates.preview": "プレビュー",
    "pricing.tag": "料金",
    "pricing.title": "柔軟な料金 –<br /><span class=\"gradient-text\">誰でもウェブサイトを持てます</span>",
    "pricing.period": "/年",
    "pricing.cta": "始める",
    "pricing.starter.name": "スターター",
    "pricing.starter.desc": "個人・フリーランサー向け",
    "pricing.starter.f1": "ランディングページ1枚",
    "pricing.starter.f2": "既製テンプレート",
    "pricing.starter.f3": "無料SSL",
    "pricing.starter.f4": "レスポンシブ",
    "pricing.starter.f5": "Zaloサポート",
    "pricing.business.badge": "最も選ばれる",
    "pricing.business.name": "ビジネス",
    "pricing.business.desc": "中小企業向け",
    "pricing.business.f1": "5〜10コンテンツページ",
    "pricing.business.f2": "セミカスタムデザイン",
    "pricing.business.f3": "SSL + 自動バックアップ",
    "pricing.business.f4": "オンページSEO",
    "pricing.business.f5": "速度最適化",
    "pricing.business.f6": "優先サポート",
    "pricing.enterprise.name": "エンタープライズ",
    "pricing.enterprise.price": "お問い合わせ",
    "pricing.enterprise.desc": "複雑なシステム、大規模Webアプリ",
    "pricing.enterprise.f1": "専用UI/UXデザイン",
    "pricing.enterprise.f2": "カスタムバックエンド + API",
    "pricing.enterprise.f3": "CRM、ERP統合",
    "pricing.enterprise.f4": "エンタープライズセキュリティ",
    "pricing.enterprise.f5": "SLA & 24/7サポート",
    "pricing.enterprise.f6": "無制限機能",
    "pricing.enterprise.cta": "見積もりを取る",
    "benefits.tag": "なぜChungSoftを選ぶのか？",
    "benefits.title": "他にない優れたメリット<br /><span class=\"gradient-text\">他では見つかりません</span>",
    "benefits.ssl.title": "無料SSL",
    "benefits.ssl.desc": "全プランにHTTPS、信頼性とSEOランキング向上。",
    "benefits.speed.title": "超高速",
    "benefits.speed.desc": "Core Web Vitals最適化、Google PageSpeed 90点以上。",
    "benefits.responsive.title": "100%レスポンシブ",
    "benefits.responsive.desc": "モバイルから4Kまで全デバイスで完璧表示。",
    "benefits.seo.title": "SEO対応",
    "benefits.seo.desc": "クリーンなHTML構造、メタタグ、スキーマ、自動サイトマップ。",
    "benefits.price.title": "柔軟な料金",
    "benefits.price.desc": "500Kから無制限まで – 常に最適なプランがあります。",
    "benefits.support.title": "迅速サポート",
    "benefits.support.desc": "2時間以内に応答、いつでもZalo/メールサポート。",
    "testimonials.tag": "お客様の声",
    "testimonials.title": "300名以上のお客様が<br /><span class=\"gradient-text\">ChungSoftを信頼</span>",
    "testimonials.t1.text": "\"500Kの予算しかなかったのに、ChungSoftが本当に美しくてプロらしいウェブサイトを作ってくれました。訪問者がすぐ購入してくれます！\"",
    "testimonials.t1.name": "Nguyen Thi Lan",
    "testimonials.t1.role": "オンラインファッションショップオーナー",
    "testimonials.t2.text": "\"レストランのオンライン予約システムをChungSoftがとても専門的に構築しました。決済統合、注文管理 – 完璧です！\"",
    "testimonials.t2.name": "Tran Van Minh",
    "testimonials.t2.role": "レストランチェーン代表",
    "testimonials.t3.text": "\"ChungSoftの最適化後、PageSpeedが97/100になりました。初月のコンバージョン率が2倍に！\"",
    "testimonials.t3.name": "Pham Duc Hung",
    "testimonials.t3.role": "マーケティングマネージャー, TechCorp",
    "testimonials.t4.text": "\"キャンペーン用のランディングページが急遽必要でした。ChungSoftは24時間で納品 – 美しく、速く、まさに望み通り！\"",
    "testimonials.t4.name": "Le Thi Hoa",
    "testimonials.t4.role": "フリーランスデザイナー",
    "testimonials.t5.text": "\"ChungSoftが社内ERPをゼロから開発してくれました。倉庫、人事、会計を統合し、1日1万件の注文をスムーズに処理しています。\"",
    "testimonials.t5.name": "Vu Thanh Son",
    "testimonials.t5.role": "CTO, Logistics Vietnam",
    "contact.tag": "お問い合わせ",
    "contact.title": "今日から<br /><span class=\"gradient-text\">プロジェクトを始めましょう</span>",
    "contact.sub": "完全無料の相談。2時間以内に返信します。",
    "contact.phone": "今すぐ電話",
    "contact.zalo": "Zaloでチャット",
    "contact.form.name": "お名前",
    "contact.form.phone": "電話番号",
    "contact.form.budget": "予算の目安",
    "contact.form.b1": "500K – 100万VND",
    "contact.form.b2": "100万 – 500万VND",
    "contact.form.b3": "500万 – 2,000万VND",
    "contact.form.b4": "2,000万VND以上",
    "contact.form.message": "ご要望の説明",
    "contact.form.submit": "無料相談リクエストを送る →",
    "contact.form.note": "🔒 お客様の情報は完全に機密です",
    "footer.desc": "美しくプロらしいウェブサイト、500K VNDから。個人から大企業まで。",
    "footer.services": "サービス",
    "footer.budget": "リーズナブルなウェブサイト",
    "footer.premium": "プレミアムデザイン",
    "footer.webapp": "Webアプリ/システム",
    "footer.templates": "テンプレートを見る",
    "footer.company": "会社",
    "footer.about": "ChungSoftについて",
    "footer.reviews": "レビュー",
    "footer.pricing": "料金",
    "footer.contact": "お問い合わせ",
    "footer.contactTitle": "連絡先",
    "footer.address": "🏢 ホーチミン市、ベトナム",
    "footer.copy": "© 2026 ChungSoft. 全著作権所有。",
    "footer.made": "ベトナムで❤️を込めて制作",
    "floating.cta": "💬 無料相談",
  },
};

/* =====================================================================
   TEMPLATE DATA (no external images – uses CSS gradient placeholders)
   ===================================================================== */
const TEMPLATES = [
  { id: 1, name: { vi: "Shop Thời Trang", en: "Fashion Store", ko: "패션 쇼핑몰", zh: "时装店", ja: "ファッションショップ" }, category: "shop",      emoji: "👗", bg: "linear-gradient(135deg,#667eea,#764ba2)" },
  { id: 2, name: { vi: "Nhà Hàng Á", en: "Asian Restaurant", ko: "아시아 레스토랑", zh: "亚洲餐厅", ja: "アジア料理店" }, category: "food",      emoji: "🍜", bg: "linear-gradient(135deg,#f093fb,#f5576c)" },
  { id: 3, name: { vi: "Landing Khóa Học", en: "Course Landing", ko: "강좌 랜딩", zh: "课程落地页", ja: "コースLP" }, category: "landing",  emoji: "📚", bg: "linear-gradient(135deg,#4facfe,#00f2fe)" },
  { id: 4, name: { vi: "Công Ty Xây Dựng", en: "Construction Corp", ko: "건설 회사", zh: "建筑公司", ja: "建設会社" }, category: "corporate", emoji: "🏗️", bg: "linear-gradient(135deg,#43e97b,#38f9d7)" },
  { id: 5, name: { vi: "Mỹ Phẩm Online", en: "Beauty Shop", ko: "뷰티 쇼핑몰", zh: "美妆网店", ja: "コスメショップ" }, category: "shop",      emoji: "💄", bg: "linear-gradient(135deg,#fa709a,#fee140)" },
  { id: 6, name: { vi: "Cà Phê & Bakery", en: "Café & Bakery", ko: "카페 & 베이커리", zh: "咖啡烘焙坊", ja: "カフェ&ベーカリー" }, category: "food",      emoji: "☕", bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)" },
  { id: 7, name: { vi: "SaaS Product", en: "SaaS Product", ko: "SaaS 제품", zh: "SaaS产品", ja: "SaaS製品" }, category: "landing",  emoji: "⚙️", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)" },
  { id: 8, name: { vi: "Công Ty Luật", en: "Law Firm", ko: "법률 사무소", zh: "律师事务所", ja: "法律事務所" }, category: "corporate", emoji: "⚖️", bg: "linear-gradient(135deg,#2c3e50,#4ca1af)" },
];

/* =====================================================================
   STATE
   ===================================================================== */
let currentLang = localStorage.getItem('cs_lang') || 'vi';
let currentFilter = 'all';

/* =====================================================================
   i18n ENGINE
   ===================================================================== */
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS['vi'][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('cs_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
  renderTemplates(currentFilter);
}

/* =====================================================================
   NAVBAR
   ===================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll state
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/* =====================================================================
   SCROLL ANIMATIONS (IntersectionObserver for performance)
   ===================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* =====================================================================
   COUNTER ANIMATION
   ===================================================================== */
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current).toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* =====================================================================
   TEMPLATES RENDER & FILTER
   ===================================================================== */
function renderTemplates(filter = 'all') {
  const grid = document.getElementById('templatesGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.category === filter);
  const previewLabel = t('templates.preview');

  grid.innerHTML = filtered.map((tmpl, i) => `
    <article class="template-card fade-in" data-category="${tmpl.category}" style="animation-delay:${i * 0.07}s">
      <div class="template-thumb">
        <div class="thumb-placeholder" style="background:${tmpl.bg}" aria-label="${tmpl.name[currentLang] || tmpl.name.vi}">
          ${tmpl.emoji}
        </div>
        <div class="template-overlay">
          <span>${previewLabel}</span>
        </div>
      </div>
      <div class="template-info">
        <strong>${tmpl.name[currentLang] || tmpl.name.vi}</strong>
        <span class="template-category">${getCategoryLabel(tmpl.category)}</span>
      </div>
    </article>
  `).join('');

  // Re-observe new cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-in').forEach(el => {
      // trigger immediately since already in view
      setTimeout(() => el.classList.add('visible'), 50);
    });
  });
}

function getCategoryLabel(cat) {
  const map = {
    shop:      { vi: 'Shop', en: 'Shop', ko: '쇼핑', zh: '网店', ja: 'ショップ' },
    food:      { vi: 'F&B', en: 'F&B', ko: 'F&B', zh: '餐饮', ja: 'F&B' },
    landing:   { vi: 'Landing', en: 'Landing', ko: '랜딩', zh: '落地页', ja: 'LP' },
    corporate: { vi: 'Công ty', en: 'Corporate', ko: '기업', zh: '企业', ja: '企業' },
  };
  return (map[cat] && map[cat][currentLang]) || cat;
}

function initTemplateFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderTemplates(currentFilter);
    });
  });
}

/* =====================================================================
   FLOATING CTA
   ===================================================================== */
function initFloatingCta() {
  const cta = document.getElementById('floatingCta');
  if (!cta) return;

  window.addEventListener('scroll', () => {
    cta.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/* =====================================================================
   CONTACT FORM
   ===================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    if (!name || !phone) return;

    // Sanitize inputs (display only, not sent to server in this demo)
    const safeName = escapeHtml(name);

    // Show success state
    form.innerHTML = `
      <div class="form-success" role="alert" aria-live="polite">
        <div class="success-icon">🎉</div>
        <h3>Cảm ơn ${safeName}!</h3>
        <p>Chúng tôi sẽ liên hệ lại trong vòng 2 giờ. Hãy kiểm tra Zalo/điện thoại nhé!</p>
      </div>
    `;
  });
}

/** Escape HTML to prevent XSS when inserting user input into DOM */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* =====================================================================
   SMOOTH SCROLL for anchor links
   ===================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72', 10);
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* =====================================================================
   INIT
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  applyTranslations();

  // Render templates
  renderTemplates('all');

  // Init modules
  initNavbar();
  initScrollAnimations();
  initCounters();
  initTemplateFilters();
  initFloatingCta();
  initContactForm();
  initSmoothScroll();
});
