var data = [{ "name": "Lenovo Thinkpad 41A4298", "website": "google" },
    { "name": "Lenovo Thinkpad 41A2222", "website": "google" },
    { "name": "Lenovo Thinkpad 41Awww33", "website": "yahoo" },
    { "name": "Lenovo Thinkpad 41A424448", "website": "google" },
    { "name": "Lenovo Thinkpad 41A429rr8", "website": "ebay" },
    { "name": "Lenovo Thinkpad 41A429ff8", "website": "ebay" },
    { "name": "Lenovo Thinkpad 41A429ss8", "website": "rediff" },
    { "name": "Lenovo Thinkpad 41A429sg8", "website": "yahoo" }
]

var data_filter = data.filter(element => element.website == "yahoo")
console.log(data_filter)