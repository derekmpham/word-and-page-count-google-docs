this.manifest = {
    "name": "Word and Page Count for Google Docs",
    "icon": "../../48.png",
    "settings": [
    {
        "tab": "Main settings",
        "group": "Visual Settings",
        "name": "themepicker",
        "type": "radioGroup",
        "label": "Choose theme (default is light):",
        "options": [
        ["light", "Light"],
        ["dark", "Dark"],
        ["terminal", "Terminal"],
        ],
        "default": "light"
    },
    {
        "tab": "Main settings",
        "group": "Counter settings",
        "name": "pagecounter",
        "type": "checkbox",
        "label": "Enable Page Counter",
        "default": true
    },
    {
        "tab": "Main settings",
        "group": "Counter settings",
        "name": "wordcounter",
        "type": "checkbox",
        "label": "Enable Word Counter",
        "default": true
    },
    {
        "tab": "Main settings",
        "group": "Other options",
        "name": "wclink",
        "type": "checkbox",
        "label": "Show Word Counter link?",
        "default": true
    }
    ]
};
