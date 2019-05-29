

const initState = {
    name: "Polo Clubs",
    type: "",
    listings: [
        {
            name: "La Mariana",
            status: 1,
            country: "France",
            cover: ""
        },
        {
            name: "Chantilly",
            status: 1,
            country: "France",
            cover: ""
        },
        {
            name: "Pompeya Polo",
            status: 1,
            country: "Argentina",
            cover: ""
        },
        {
            name: "La Palmeraie",
            status: 1,
            country: "Maroco",
            cover: ""
        }
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case "addListing":
            console.log("New Listing created ", action.payload);
            return state;
        case "editListing":
            console.log("Listing edited ", action.payload);
            return state;
        case "removeListing":
            console.log("Listing deleted ", action.payload);
            return state;
        default:
            return state;
    }
};