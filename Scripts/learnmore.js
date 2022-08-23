"use strict";
const modalContent = [
    {
        id: "ee1",
        imgSrc: "./Images/Commercial Development.jpg",
        heading: "Commercial Development",
        text: "Henrich Properties Limited commercial developments include some of the finest and most desirable office properties and its landmark construction of a shopping mall in the Federal Capital Territory. Each property is meticulously maintained and features the latest amenities and services. As a result, the company continues to attract and retain a distinguished and growing roster of tenants. Henrich Properties Limited continues to evolve in response to the changing aspirations and challenges of developers, owners and occupants alike.To lift the competitive performance of a building project, or to help it find funding in tough markets, Henrich Properties Limited offers a powerful combination of advisory, design and technical services:£ Property Development and Investment£ Project Aqcuisition and Management£ Project Marketing and SalesThe company's major commercial developments include the direct financing and development of residential and commercial properties in Abuja, Katsina, Kaduna and in Ilorin, Kwara State capital.",
    },
    {
        id: "ee2",
        imgSrc: "./Images/Retail Development.jpg",
        heading: "Retail Development",
        text: "Henrich Properties Limited retail centers, which are among the most successful in the region, incorporate high-quality design, attractive high-traffic locations and the right mix of retail tenants. Tenants include well-known national chains, as well as respected local retailers. Henrich Properties Limited has the expertise and experience to design, build and manage thriving retail centers in today's highly competitive environment. For high-quality stand-alone destination and high profile stores looking for completely integrated, prestigious locations, Henrich Properties Limited will find and purchase an acceptable site, build and engineer to suit, lease-back the facility, and manage it long-term. Henrich Properties Limited definitely knows its role in retail development management, its demands and impact that are distinct from offices or services, and as such has established retail centers located in choice locations around the country.",
    },
    {
        id: "ee3",
        imgSrc: "./Images/Residential Development.jpg",
        heading: "Residential Development",
        text: ` Henrich Properties Limited has developed and sold dozens of high-end luxury homes in some of Nigeria's most exclusive communities: £ A mini-estate of 16 units of 3 bedroom flats at Kubwa, Abuja £ 24 units of 2-bedroom flats off- Isa Kaita Road, Kaduna State. £ 2 Blocks of 12 flats of3 bedroom flat each block is made of 2storey building alongJose Martin Street,Asokoro, Abuja. £ 16 units of 2-bedroom flat in a premises at Asa Dam Road, Ilorin,Kwara State. Designed by leading architects and interior designers, these magnificent homes are built with a level of expert craftsmanship and attention to detail that is rarely seen in today's market. Homes range from stately mansions in exclusive locations in Abuja to estate homes in Lagos and Kaduna. Henrich Properties Limited also excels in the development of mass housing turnkey projects.`,
    },
    {
        id: "s1",
        imgSrc: "./Images/Business Consulting.jpg",
        heading: "Business Consulting",
        text: `Henrich Properties Limited helps business services provides competitive advantage in a market focused on delivering both exceptional service to end customers and attractive ROI to shareholders. The business services sector is exploiting opportunities driven by globalization, consolidation and new technology. And new integrated offerings are forcing established players to develop scalable services that satisfy evolving regulatory and environmental standards. New technology platforms are also driving lower-cost models that are disruptive to incumbent businesses, but provide opportunities for new entrants and active players. Our business consulting service help clients take advantage of attractive opportunities, develop innovative business models and out-perform their competitors. The sector is diverse - including professional services, education and training, and support services and outsourcing. Multinational organizations and specialist service providers need to analyze their critical performance drivers, evaluate contractual frameworks and continue to evolve service offering strategies that can provide a competitive advantage. We combine in-depth industry understanding with deep technical expertise to enable clients to develop winning strategies for acquisition and divestment, service development, new market entry, regulation and political risk management, operational efficiency, and strategy activation. With our support, these clients have been able to develop new service offerings for an increasingly energy-efficient world, maximize ROI from strategic investments and execute detailed plans for international growth. `,
    },
    {
        id: "s2",
        imgSrc: "./Images/unnamed.jpg",
        heading: "Finacial Advisory",
        text: `At Henrich Properties Limited, Our hallmark is building relationships based on your individual needs and on our professional expertise and personal service. Finance is a means to an end, not an end in itself. We are committed to helping you achieve your financial goals so that you can focus your attention on all of the other aspects of your life. Our approach starts with establishing a two-way relationship with each client. We believe that a successful advisor-client relationship develops when both sense that they can and will work well together. We spend quite a bit of time with prospective clients making sure that there is a good fit. So our involvement with clients particularly for those services that anticipate a long-term involvement or will over time result in life-changing decisions begins with face-to-face meetings designed to ensure that there is a meeting of the minds and a real sense of trust. Client service is at the core of what we do. Industry studies and our own experiences have shown that the two central tenets of financial advisory services are to be accessible and keep your client informed through appropriate levels of communication.`,
    },
    {
        id: "s3",
        imgSrc: "./Images//Energy-Services.jpg",
        heading: "Energy Services",
        text: `The energy industry faces considerable challenges as global demand continues to place the world's scarce natural resources under unrelenting pressure. Companies from across the energy value chain also have to adapt to a raft of new regulations and technologies. Henrich Properties Limited experts in the Energy consulting practice have the extensive industry and operational expertise required to help our clients prosper in these testing times.We have been a long-term consulting partner for many of the world's largest energy companies, helping them capitalize on opportunities while addressing complex legislative policy, technology and economic issues. Primary energy suppliers, OEMs and utilities, among others, turn to Henrich Properties Limited to benefit from its experience gathered over decades of tackling major strategic issues in the energy sector. Members of our Energy & Environment practice closely follow technological advances, regulatory changes and other major developments and are frequent participants in major industry events. For every project, we bring together the relevant industry and regional expertise from across the globe. Our partners are fully hands-on and are directly involved in all stages of the projects. `,
    },
    {
        id: "s4",
        imgSrc: "./Images/Property Managment.jpg",
        heading: "Property/facility Management & Asset Valuation",
        text: "",
    },
    {
        id: "s5",
        imgSrc: "./Images/Branding and Corporate Identity.jpg",
        heading: "Branding and Corporate Identity",
        text: `The most critical element for creating a successful communication trategy is having clarity of brand. It is the foundation. Without brand clarity, it is difficult to create engaging strategies that move your target audience to action in relevant, distinctive, consistent, and repeatable ways. Our experience and network enable us to offer services leading to the results that are specific to the client. We maintain consistently high standards for service and people so that we can always bring the best team with the broadcast range of industry and functional experience to bear on every engagement.Henrich Properties Limited believes that your business, whether It Is a small, medium or large one, deserves recognition...we are here to assist you!Our graphic design department is a studio of world-class designers and developers energized by the challenge of understanding the unique goals of a business and translating them into profitable design and Corporate Branding. We provide Graphic design services which profoundly improve the visibility, credibility and success of your business. We believe that every business is unique, and that every business deserves world-class branding. That's why we devote ourselves to understanding your business before we propose a solution. Then, we brainstorm fresh ideas tailored to your needs. Once we get your input, we implement the solution to your specifications. Once, we are done, a new identity is born. `,
    },
];

// ==================
// MOBILE NAVBAR
// ==================
const icon = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-nav-bar");
const modalState = document.querySelector(".modal");
const noScroll = document.querySelector("html");

// ----- FN == FUNCTION ------
// FN FOR POSITION AND VISIBILITY OF SIDEBAR
const style = (visVal, posVal) => {
    sideBar.style.visibility = visVal;
    sideBar.style.right = posVal;
};

// FN FOR ADDING CLASS
const addClass = (element, className) => element.classList.add(className);

// FN FOR REMOVING CLASS
const removeClass = (element, className) => element.classList.remove(className);

// FN FOR STYLING ELEENTS
const styleElement = (element, choice, value) =>
    (element.style[choice] = value);

// FN FOR SIDE NAV BAR TO SLIDE OUT
const sideBarOpen = () => {
    style("visible", "0em");
    addClass(icon, "slide");
    addClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "hidden");
};

// FN FOR SIDE NAV BAR TO GO BACK IN
const sideBarClose = () => {
    style("hidden", "-20em");
    removeClass(icon, "slide");
    removeClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "scroll");
};

// TRANSITION STYLE OF ICON AND SIDE NAV BAR
styleElement(sideBar, "transition", ".5s ease-in-out");
styleElement(icon, "transition", ".4s ease-in-out");

// TOGGLING ICON FN
const toggleIcon = () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-arrow-left");
};

// THE EVENT LISTENER FOR WHEN ICON IS CLICKED
icon.addEventListener("click", () => {
    toggleIcon();
    !icon.classList.contains("fa-bars") ? sideBarOpen() : sideBarClose();
});

// THE EVENT LISTENER FOR WHEN ELEMENTS IN THE SIDE BAR IS CLICKED
sideBar.addEventListener("click", () => {
    toggleIcon();
    sideBarClose();
});

// =======================
// LEARN MORE FUNCTIONALITY
// =======================
const learnMoreHeader = document.querySelector(".learn-more-header");
const learnMoreText = document.querySelector(".learn-more-text");
const learnMoreImage = document.querySelector(".learn-more-image");

const setContent = () => {
    const id = localStorage.getItem("id");
    for (let i = 0; i < modalContent.length; i++) {
        if (id === modalContent[i].id) {
            learnMoreHeader.textContent = modalContent[i].heading;
            learnMoreText.textContent = modalContent[i].text;
            learnMoreImage.src = modalContent[i].imgSrc;
        }
    }
};
setContent();
// =======================
