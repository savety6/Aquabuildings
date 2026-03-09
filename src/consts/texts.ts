const AllRightsReservedGenerated = () => {
  return `© ${new Date().getFullYear()} ${Title}. All rights reserved.`
}

export const phoneNumber = "+359 888 888 888"

export const Title = "AquaBuildings" //"GreenFlow | Smart Garden Automation"


export const AllRightsReserved = AllRightsReservedGenerated()

export const NavbarOptions = {
    offers: {
        label: "Наши предложения",
        href: "#offers",
    },
    gallery: {
        label: "Галерия",
        href: "#gallery",
    },
    contact: {
        label: "Контакти",
        href: "#cta",
    },
    contactButton: {
        label: `${phoneNumber}`,
        href: "#cta",
    },
}

export const Hero = {
    heading: "Smart Garden Automation",
    title: "Нека технологиите се грижат за вашата градина",
    description: "Автоматизирани системи за поливане, подбрани абонаментни услуги за градинарство и интелигентни решения за градината, създадени, за да поддържат вашето външно пространство красиво и жизнено през цялата година.",
    button1: {
        label: "Научете повече за нашите системи",
        href: "#offers",
    },
    button2: {
        label: "Преглед на абонаментни услуги",
        href: "#gallery",
    },
    stats: {
        gardensAutomated: {
            label: "Автоматизирани градини",
            value: "500+",
        },
        waterSaved: {
            label: "Спестена вода",
            value: "40%",
        },
        smartMonitoring: {
            label: "Интелигентно наблюдение",
            value: "24/7",
        },
    }

}

export const Offers = {
    heading: "Какво предлагаме",
    title: "Всичко необходимо за вашата градина",
    description: "От автоматизирано напояване до подбрани абонаментни услуги – предлагаме цялостни интелигентни решения за градината.",
    button: {
        label: "Научете повече",
        href: "#offers",
    },
    offers: {
        automatedWatering: {
            title: "Автоматизирано поливане",
            description: "Интелигентни системи за напояване, които се адаптират спрямо метеорологичните условия, влажността на почвата и нуждите на растенията. Пестете вода, като същевременно поддържате градината си зелена и здрава.",
            features: ["Планиране според времето", "Сензори за влажност на почвата", "Управление по зони"],
        },
        gardenSubscriptions: {
            title: "Абонаменти за градината",
            description: "Месечни подбрани пакети със сезонни растения, висококачествени семена, органични торове и експертни насоки за отглеждане, доставени директно до вашата врата.",
            features: ["Подбор на сезонни растения", "Включени органични продукти", "Експертни насоки за отглеждане"],
        },
        smartGardenFeatures: {
            title: "Интелигентни функции за градината",
            description: "От сензори за почвата до проследяване на растежа – нашите интелигентни функции ви позволяват да наблюдавате и управлявате градината си отвсякъде чрез нашето интуитивно приложение.",
            features: ["Наблюдение в реално време", "Анализ на растежа", "Дистанционно управление чрез приложение"],
        },
    },
    
}

export const Gallery = {
    heading: "Нашата работа",
    title: "Градини, които вдъхнахме към живот",
    description: "Разгледайте нашето портфолио от красиво автоматизирани градини – от уютни градски тераси до просторни дворове и озеленени пространства.",
    galleryItems: {
        backyardOasis: {
            alt: "Gallery of our gardens",
            label: "Оазис в двора",
        },
        vegetableGarden: {
            alt: "Gallery of our gardens",
            label: "Зеленчукова градина",
        },
        rooftopTerrace: {
            alt: "Gallery of our gardens",
            label: "Покривна тераса",
        },
        smartMisting: {
            alt: "Gallery of our gardens",
            label: "Интелигентно оросяване",
        },
        indoorGreenhouse: {
            alt: "Gallery of our gardens",
            label: "Вътрешна оранжерия",
        },
        landscapeDesign: {
            alt: "Gallery of our gardens",
            label: "Ландшафтен дизайн",
        },
    }
}

export const CTA = {
    heading: "Оферта за ограничено време",
    title: "Готови ли сте да преобразите вашата градина?",
    description: "Присъединете се към стотиците собственици на домове, които вече преминаха към интелигентно градинарство. Получете безплатна консултация и 20% отстъпка при първата инсталация на автоматизирана система.",
    button1: {
        label: "Запазете безплатна консултация",
        href: "#cta",
    },
    button2: {
        label: "Разгледайте абонаментите",
        href: "#gallery",
    },
    subdescription: "Без обвързване. Можете да прекратите абонамента си по всяко време.",
}

export const Footer = {
    description: "Интелигентна автоматизация за градината за съвременния дом. Нека технологиите се грижат за вашата градина.",
    column1: {
        title: "Продукти",
        items: [
            {
                label: "Системи за поливане",
                href: "#watering-systems",
            },
            {
                label: "Абонаменти",
                href: "#subscriptions",
            },
            {
                label: "Интелигентни сензори",
                href: "#smart-sensors",
            },
            {
                label: "Приложение за градината",
                href: "#garden-app",
            },
        ],
    },
    column2: {
        title: "Компания",
        items: [
            {
                label: "За нас",
                href: "#about-us",
            },
            {
                label: "Блог",
                href: "#blog",
            },
            {
                label: "Кариери",
                href: "#careers",
            },
            {
                label: "Контакти",
                href: "#contact",
            },
        ],
    },
    column3: {
        title: "Поддръжка",
        items: [
            {
                label: "Помощен център",
                href: "#help-center",
            },
            {
                label: "Ръководство за инсталация",
                href: "#installation-guide",
            },
            {
                label: "Политика за поверителност",
                href: "#privacy-policy",
            },
            {
                label: "Общи условия",
                href: "#terms-of-service",
            },
        ],
    },
}