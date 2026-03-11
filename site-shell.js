(function () {
  const defaultSupported = ['en', 'es', 'pl', 'ar'];

  const sharedDict = {
    en: {
      navGetCare: 'Get Care',
      navPrograms: 'Programs',
      navAbout: 'About Us',
      navGetInvolved: 'Get Involved',
      navDonate: 'Donate',
      navHealthcareServices: 'Healthcare Services',
      navHousingHHH: 'Housing, Healthcare, and Hope (HHH)',
      navCAHPB: 'Center for Advancement of Human Potential and Belonging (CAHPB)',
      navOurMission: 'Our Mission',
      navOurImpact: 'Our Impact',
      navOurLeaders: 'Our Leaders',
      navOurPartners: 'Our Partners',
      navBoard: 'Our Board of Directors',
      navBecomeVolunteer: 'Become a Volunteer',
      navPartnerReferrals: 'Partner Referrals',
      ctaCall: 'Call (815) 726-3377',
      patientInfo: 'Patient Information',
      footerAboutHeading: 'About WGMC',
      footerAboutBody: 'WGMC is a free care organization providing healthcare and social services in Will & Grundy Counties. Free medical and behavioral healthcare is provided to uninsured and underinsured adults, and free housing support and case management is provided to residents who are homeless or housing insecure.',
      footerGetCareHeading: 'Get Care',
      footerProgramsHeading: 'Programs',
      footerVisitHeading: 'Visit',
      footerCallCta: '📞 Call (815) 726-3377',
      footerOpenInMaps: '🗺️ Open in Maps',
      donateGeneral: 'General Donation',
      donateSponsorPatient: 'Sponsor a Patient',
      donateBrickByBrick: 'Brick by Brick',
      footerLocations: 'Locations',
      footerSupport: 'Support',
      footerGetInvolved: 'Get Involved',
      footerAboutUs: 'About Us',
      footerGetCare: 'Get Care',
      footerPrograms: 'Programs',
      footerPhoneLabel: 'Phone:',
      footerAddressLabel: 'Address:',
      footerHoursLabel: 'Hours:',
      footerHoursValue: 'Monday–Thursday: 9:00 a.m. – 5:00 p.m.\nSaturday Clinics (Twice Monthly): 9:00 a.m. – 2:00 p.m. (By appointment only)',
      callWGMC: 'Call WGMC'
    },
    es: {
      navGetCare: 'Obtenga atención',
      navPrograms: 'Programas',
      navAbout: 'Sobre nosotros',
      navGetInvolved: 'Involúcrese',
      navDonate: 'Donar',
      navHealthcareServices: 'Servicios de atención médica',
      navHousingHHH: 'Vivienda, atención médica y esperanza (HHH)',
      navCAHPB: 'Centro para el Avance del Potencial Humano y la Pertenencia (CAHPB)',
      navOurMission: 'Nuestra misión',
      navOurImpact: 'Nuestro impacto',
      navOurLeaders: 'Nuestros líderes',
      navOurPartners: 'Nuestros socios',
      navBoard: 'Junta Directiva',
      navBecomeVolunteer: 'Conviértase en voluntario',
      navPartnerReferrals: 'Referencias de socios',
      ctaCall: 'Llamar (815) 726-3377',
      patientInfo: 'Información para pacientes',
      footerAboutHeading: 'Acerca de WGMC',
      footerAboutBody: 'WGMC es una organización de atención gratuita que brinda servicios de salud y sociales en los condados de Will y Grundy. Se brinda atención médica y conductual gratuita a adultos sin seguro o con seguro insuficiente, y se brinda apoyo de vivienda y administración de casos a residentes sin hogar o con inseguridad de vivienda.',
      footerGetCareHeading: 'Obtenga atención',
      footerProgramsHeading: 'Programas',
      footerVisitHeading: 'Visítenos',
      footerCallCta: '📞 Llame al (815) 726-3377',
      footerOpenInMaps: '🗺️ Abrir en Maps',
      donateGeneral: 'Donación general',
      donateSponsorPatient: 'Patrocine a un paciente',
      donateBrickByBrick: 'Ladrillo por ladrillo',
      footerLocations: 'Ubicaciones',
      footerSupport: 'Apoyo',
      footerGetInvolved: 'Involúcrese',
      footerAboutUs: 'Sobre nosotros',
      footerGetCare: 'Obtenga atención',
      footerPrograms: 'Programas',
      footerPhoneLabel: 'Teléfono:',
      footerAddressLabel: 'Dirección:',
      footerHoursLabel: 'Horario:',
      footerHoursValue: 'Lunes a jueves: 9:00 a. m. – 5:00 p. m.\nClínicas de sábado (dos veces al mes): 9:00 a. m. – 2:00 p. m. (solo con cita)',
      callWGMC: 'Llamar a WGMC'
    },
    pl: {
      navGetCare: 'Uzyskaj opiekę',
      navPrograms: 'Programy',
      navAbout: 'O nas',
      navGetInvolved: 'Zaangażuj się',
      navDonate: 'Przekaż darowiznę',
      navHealthcareServices: 'Usługi opieki zdrowotnej',
      navHousingHHH: 'Mieszkanie, opieka zdrowotna i nadzieja (HHH)',
      navCAHPB: 'Centrum Rozwoju Potencjału Ludzkiego i Przynależności (CAHPB)',
      navOurMission: 'Nasza misja',
      navOurImpact: 'Nasz wpływ',
      navOurLeaders: 'Nasi liderzy',
      navOurPartners: 'Nasi partnerzy',
      navBoard: 'Zarząd',
      navBecomeVolunteer: 'Zostań wolontariuszem',
      navPartnerReferrals: 'Polecenia partnerów',
      ctaCall: 'Zadzwoń (815) 726-3377',
      patientInfo: 'Informacje dla pacjentów',
      footerAboutHeading: 'O WGMC',
      footerAboutBody: 'WGMC to organizacja zapewniająca bezpłatną opiekę zdrowotną i usługi społeczne w powiatach Will i Grundy. Bezpłatna opieka medyczna i behawioralna jest zapewniana dorosłym nieubezpieczonym lub niedoubezpieczonym, a wsparcie mieszkaniowe i zarządzanie sprawami są zapewniane osobom bezdomnym lub zagrożonym bezdomnością.',
      footerGetCareHeading: 'Uzyskaj opiekę',
      footerProgramsHeading: 'Programy',
      footerVisitHeading: 'Odwiedź',
      footerCallCta: '📞 Zadzwoń (815) 726-3377',
      footerOpenInMaps: '🗺️ Otwórz w Mapach',
      donateGeneral: 'Darowizna ogólna',
      donateSponsorPatient: 'Zasponsoruj pacjenta',
      donateBrickByBrick: 'Cegła po cegle',
      footerLocations: 'Lokalizacje',
      footerSupport: 'Wsparcie',
      footerGetInvolved: 'Zaangażuj się',
      footerAboutUs: 'O nas',
      footerGetCare: 'Uzyskaj opiekę',
      footerPrograms: 'Programy',
      footerPhoneLabel: 'Telefon:',
      footerAddressLabel: 'Adres:',
      footerHoursLabel: 'Godziny:',
      footerHoursValue: 'Poniedziałek–czwartek: 9:00 – 17:00\nSobotnie kliniki (dwa razy w miesiącu): 9:00 – 14:00 (tylko po wcześniejszym umówieniu)',
      callWGMC: 'Zadzwoń do WGMC'
    },
    ar: {
      navGetCare: 'الحصول على الرعاية',
      navPrograms: 'البرامج',
      navAbout: 'معلومات عنا',
      navGetInvolved: 'شارك',
      navDonate: 'التبرع',
      navHealthcareServices: 'خدمات الرعاية الصحية',
      navHousingHHH: 'الإسكان والرعاية الصحية والأمل (HHH)',
      navCAHPB: 'مركز النهوض بالإمكانات البشرية والانتماء (CAHPB)',
      navOurMission: 'مهمتنا',
      navOurImpact: 'تأثيرنا',
      navOurLeaders: 'قادتنا',
      navOurPartners: 'شركاؤنا',
      navBoard: 'مجلس الإدارة',
      navBecomeVolunteer: 'كن متطوعًا',
      navPartnerReferrals: 'إحالات الشركاء',
      ctaCall: 'اتصل على ‎(815) 726-3377‎',
      patientInfo: 'معلومات المرضى',
      footerAboutHeading: 'حول WGMC',
      footerAboutBody: 'WGMC هي منظمة رعاية مجانية تقدم خدمات صحية واجتماعية في مقاطعتي ويل وجرندي. يتم تقديم رعاية طبية وسلوكية مجانية للبالغين غير المؤمن عليهم أو غير المؤمن عليهم بما يكفي، ويتم تقديم دعم السكن وإدارة الحالات للمقيمين المشردين أو غير الآمنين من حيث السكن.',
      footerGetCareHeading: 'الحصول على الرعاية',
      footerProgramsHeading: 'البرامج',
      footerVisitHeading: 'الزيارة',
      footerCallCta: '📞 اتصل على ‎(815) 726-3377‎',
      footerOpenInMaps: '🗺️ افتح في الخرائط',
      donateGeneral: 'تبرع عام',
      donateSponsorPatient: 'رعاية مريض',
      donateBrickByBrick: 'طوبة بطوبة',
      footerLocations: 'المواقع',
      footerSupport: 'الدعم',
      footerGetInvolved: 'شارك',
      footerAboutUs: 'معلومات عنا',
      footerGetCare: 'الحصول على الرعاية',
      footerPrograms: 'البرامج',
      footerPhoneLabel: 'الهاتف:',
      footerAddressLabel: 'العنوان:',
      footerHoursLabel: 'الساعات:',
      footerHoursValue: 'الإثنين–الخميس: 9:00 ص – 5:00 م\nعيادات السبت (مرتان شهريًا): 9:00 ص – 2:00 م (بموعد فقط)',
      callWGMC: 'اتصل بـ WGMC'
    }
  };

  function computeLang(supported) {
    const params = new URLSearchParams(location.search);
    const raw = (params.get('lang') || localStorage.getItem('wgmc_lang') || navigator.language || 'en')
      .toString()
      .slice(0, 2)
      .toLowerCase();
    return supported.includes(raw) ? raw : supported[0] || 'en';
  }

  function updateLangLinks(lang) {
    document.querySelectorAll('[data-lang-href]').forEach((el) => {
      const base = el.getAttribute('data-lang-href') || '';
      if (!base || base.startsWith('http')) return;
      const [pathAndQuery, hashPart] = base.split('#');
      const qIndex = (pathAndQuery || '').indexOf('?');
      const pathPart = qIndex === -1 ? pathAndQuery : pathAndQuery.slice(0, qIndex);
      const existingQuery = qIndex === -1 ? '' : pathAndQuery.slice(qIndex + 1);
      const params = new URLSearchParams(existingQuery);
      params.set('lang', lang);
      const queryString = params.toString();
      const next = `${pathPart || ''}${queryString ? `?${queryString}` : ''}${hashPart ? `#${hashPart}` : ''}`;
      el.setAttribute('href', next);
    });
  }

  function setupDropdowns() {
    const dropdowns = Array.from(document.querySelectorAll('[data-dropdown]'));
    const closeAll = (except) => {
      dropdowns.forEach((dd) => {
        if (dd !== except) {
          dd.classList.remove('open');
          dd.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
          dd.querySelector('.dropdown-panel')?.classList.remove('open');
        }
      });
    };
    dropdowns.forEach((dd) => {
      const btn = dd.querySelector('.dropdown-toggle');
      const panel = dd.querySelector('.dropdown-panel');
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const willOpen = !dd.classList.contains('open');
        closeAll(dd);
        dd.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        panel?.classList.toggle('open', willOpen);
      });
    });
    document.addEventListener('click', (e) => {
      if (dropdowns.some((dd) => dd.contains(e.target))) return;
      closeAll();
    });
  }

  function setupMobileNav() {
    const mobileToggle = document.querySelector('[data-mobile-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileToggle.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
      });
    }
    document.querySelectorAll('[data-mobile-accordion]').forEach((btn) => {
      const panel = document.querySelector(`[data-mobile-panel="${btn.dataset.mobileAccordion}"]`);
      if (!panel) return;
      btn.addEventListener('click', () => {
        const isHidden = panel.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
      });
    });
  }

  function mergeDict(base, override) {
    const out = { ...base };
    Object.keys(override || {}).forEach((lang) => {
      out[lang] = { ...(base[lang] || {}), ...(override[lang] || {}) };
    });
    return out;
  }

  function setKeyIfMissing(el, key, attr = 'data-i18n') {
    if (!el || !key) return;
    if (!el.getAttribute(attr)) el.setAttribute(attr, key);
  }

  function normalizeText(text) {
    return (text || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function autoBindSharedText() {
    const hrefBindings = {
      'program-health-care-services.html': 'navHealthcareServices',
      'program-housing-outreach-case-management.html': 'navHousingHHH',
      'program-community-research-data.html': 'navCAHPB',
      'our-mission.html': 'navOurMission',
      'our-impact.html': 'navOurImpact',
      'our-leaders.html': 'navOurLeaders',
      'our-partners.html': 'navOurPartners',
      'our-board-of-directors.html': 'navBoard',
      'become-a-volunteer.html': 'navBecomeVolunteer',
      'partner-referrals.html': 'navPartnerReferrals',
      'patients.html': 'patientInfo'
    };

    Object.entries(hrefBindings).forEach(([href, key]) => {
      [`[data-lang-href="${href}"]`, `a[href="${href}"]`].forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => setKeyIfMissing(el, key));
      });
    });

    const donationBindings = {
      'https://www.paypal.com/donate/?hosted_button_id=QB3XVPDN3EBDJ': 'donateGeneral',
      'https://www.paypal.com/ncp/payment/U2RHP4GV8MDUW': 'donateSponsorPatient',
      'https://willgrundymedicalclinic.org/brick-by-brick/': 'donateBrickByBrick'
    };
    Object.entries(donationBindings).forEach(([href, key]) => {
      document.querySelectorAll(`a[href="${href}"]`).forEach((el) => setKeyIfMissing(el, key));
    });

    document.querySelectorAll('button.dropdown-toggle').forEach((btn) => {
      const text = normalizeText(btn.textContent || '');
      if (text.startsWith('about')) setKeyIfMissing(btn, 'navAbout');
      if (text.startsWith('get involved')) setKeyIfMissing(btn, 'navGetInvolved');
    });

    document.querySelectorAll('[data-mobile-accordion]').forEach((btn) => {
      const val = btn.getAttribute('data-mobile-accordion');
      if (val === 'about') setKeyIfMissing(btn.querySelector('span'), 'navAbout');
      if (val === 'involved') setKeyIfMissing(btn.querySelector('span'), 'navGetInvolved');
    });

    const footerHeadingMap = {
      'about wgmc': 'footerAboutHeading',
      'get care': 'footerGetCareHeading',
      programs: 'footerProgramsHeading',
      visit: 'footerVisitHeading'
    };
    document.querySelectorAll('footer h3').forEach((h3) => {
      const key = footerHeadingMap[normalizeText(h3.textContent)];
      if (key) setKeyIfMissing(h3, key);
    });

    document.querySelectorAll('footer a[href^="tel:+18157263377"]').forEach((el) => setKeyIfMissing(el, 'footerCallCta'));
    document.querySelectorAll('a.btn.btn-primary[href^="tel:+18157263377"]').forEach((el) => setKeyIfMissing(el, 'ctaCall'));
    document.querySelectorAll('footer a.btn.btn-light[href^="tel:+18157263377"]').forEach((el) => setKeyIfMissing(el, 'footerCallCta'));
    document.querySelectorAll('footer a.btn.btn-outline').forEach((el) => setKeyIfMissing(el, 'patientInfo'));
    document.querySelectorAll('a[href^="https://maps.google.com/?q=213+E+Cass+St"]').forEach((el) => setKeyIfMissing(el, 'footerOpenInMaps'));

    const footerLabels = {
      'address:': 'footerAddressLabel',
      'phone:': 'footerPhoneLabel',
      'hours:': 'footerHoursLabel'
    };
    document.querySelectorAll('footer li strong').forEach((el) => {
      const key = footerLabels[normalizeText(el.textContent)];
      if (key) setKeyIfMissing(el, key);
    });

    const footerLinksMap = {
      'index.html#programs': 'footerPrograms',
      'index.html#locations': 'footerLocations',
      'index.html#support': 'footerSupport',
      'patients.html': 'footerGetCare',
      'become-a-volunteer.html': 'footerGetInvolved',
      'our-mission.html': 'footerAboutUs'
    };
    Object.entries(footerLinksMap).forEach(([href, key]) => {
      document.querySelectorAll(`footer a[data-lang-href="${href}"]`).forEach((el) => setKeyIfMissing(el, key));
    });

    document.querySelectorAll('footer pre').forEach((el) => setKeyIfMissing(el, 'footerHoursValue'));

    // Footer Donate dropdown button (btn-secondary inside footer)
    document.querySelectorAll('footer button.dropdown-toggle.btn-secondary').forEach((btn) => setKeyIfMissing(btn, 'navDonate'));

    // Footer "About WGMC" description paragraph (the <p> sibling right after the heading)
    document.querySelectorAll('footer h3').forEach((h3) => {
      if (normalizeText(h3.textContent) === 'about wgmc') {
        const p = h3.nextElementSibling;
        if (p && p.tagName === 'P') setKeyIfMissing(p, 'footerAboutBody');
      }
    });

    // Non-primary, non-footer call buttons (e.g. "Call WGMC" secondary/light CTAs)
    document.querySelectorAll('a.btn:not(.btn-primary)[href^="tel:+18157263377"]:not(footer *)').forEach((el) => setKeyIfMissing(el, 'callWGMC'));
  }

  window.initPage = function initPage(dict = {}, supported = defaultSupported) {
    dict = mergeDict(sharedDict, dict || {});
    let lang = computeLang(supported);

    function translate(key) {
      if (!key) return null;
      return (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || null;
    }

    function translateAttr(attr, applyValue) {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
        const key = el.getAttribute(`data-i18n-${attr}`);
        const value = translate(key);
        if (value) applyValue(el, value);
      });
    }

    function setTextPreserveChildren(el, value) {
      const childElements = el.children && el.children.length > 0;
      if (!childElements) {
        el.textContent = value;
        return;
      }
      const textNode = Array.from(el.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
      if (textNode) {
        const original = textNode.textContent || '';
        const leadingSpace = original.match(/^\s+/)?.[0] || '';
        const trailingSpace = original.match(/\s+$/)?.[0] || '';
        const needsTrailingSpace = !trailingSpace && textNode.nextSibling && textNode.nextSibling.nodeType === Node.ELEMENT_NODE;
        textNode.textContent = `${leadingSpace}${value}${trailingSpace || (needsTrailingSpace ? ' ' : '')}`;
        return;
      }
      const firstChild = el.firstChild;
      const insertAfterFirstElement = firstChild && firstChild.nodeType === Node.ELEMENT_NODE;
      const nextSibling = insertAfterFirstElement ? firstChild.nextSibling : firstChild;
      const needsLeadingSpace = insertAfterFirstElement;
      const needsTrailingSpace = nextSibling && nextSibling.nodeType === Node.ELEMENT_NODE;
      const text = `${needsLeadingSpace ? ' ' : ''}${value}${needsTrailingSpace ? ' ' : ''}`;
      if (insertAfterFirstElement) {
        el.insertBefore(document.createTextNode(text), firstChild.nextSibling);
      } else {
        el.insertBefore(document.createTextNode(text), firstChild);
      }
    }

    function apply() {
      autoBindSharedText();
      if (lang === 'ar' && !document.getElementById('wgmc-ar-font')) {
        const link = document.createElement('link');
        link.id = 'wgmc-ar-font';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap';
        document.head.appendChild(link);
      }
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);
      document.body?.setAttribute('data-lang', lang);
      localStorage.setItem('wgmc_lang', lang);
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState({}, '', url);
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = translate(key);
        if (value) setTextPreserveChildren(el, value);
      });
      document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        const value = translate(key);
        if (value) el.innerHTML = value;
      });
      translateAttr('placeholder', (el, value) => el.setAttribute('placeholder', value));
      translateAttr('title', (el, value) => el.setAttribute('title', value));
      translateAttr('aria', (el, value) => el.setAttribute('aria-label', value));
      updateLangLinks(lang);
      const select = document.querySelector('.lang-select');
      if (select) select.value = lang;
      window.dispatchEvent(new CustomEvent('wgmc:language-change', { detail: { lang } }));
    }

    function setLang(next) {
      if (!supported.includes(next)) next = supported[0] || 'en';
      lang = next;
      apply();
    }

    const langSelect = document.querySelector('.lang-select');
    langSelect?.addEventListener('change', (e) => setLang(e.target.value));

    setupDropdowns();
    setupMobileNav();
    apply();
  };
})();
