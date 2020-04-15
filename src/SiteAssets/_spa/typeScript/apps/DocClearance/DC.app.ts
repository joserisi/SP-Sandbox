import * as $ from "jquery";
import * as spEnv from "../../spa.spEnv";
import "../../spa.spCRUD";



$(document).ready(function () {

    spEnv.$pa.spCRUD.clear({});

    spEnv.$pa.spCRUD.getList({
        objects: [{
            name: "DCMain",
            tabTitle: "Document Clearance",
            search: [""],
            singular: "Document Clearance",
            columns: {
                visible: [],
                hidden: ["Title"],
                readOnly: ["CurrentPerson", "CurrentStatus"]
            },
            table: {
                css: {
                    "width": "200px",
                    "min-width": "200px"
                },
                columns: [{
                    name: "Title",
                    css: {
                        "width": "300px",
                        "min-width": "300px"
                    }
                }]
            },
            children: [{
                listName: "WORK",
                name: "WORK",
                tabTitle: "Document Clearance Flow",
                sectionName: "Approval/Review Area",
                condition: "DCMain eq {{ID}}",
                repeatable: { enable: true, hasSequence: true },
                wholeForm: false,
                columns: {
                    visible: ["RoleType", "Participant", "Status", "DateOfDecision"],
                    hidden: ["Title", "DCMain", "Sequence"],
                    readOnly: ["DateOfDecision"]
                },
                availableParent: ["edit"],
                singular: "Participant",
                hidden: true,
                table: {
                    css: {
                        "width": "200px",
                        "min-width": "200px"
                    },
                    columns: [{
                        name: "Title",
                        css: {
                            "width": "300px",
                            "min-width": "300px"
                        }
                    }]
                },
                search: [""]
            }, {
                hidden: true,
                listName: "Note",
                name: "Note",
                sectionName: "Notes",
                singular: "Note Entry",
                condition: "DCMain eq {{ID}}",
                repeatable: { enable: true, hasSequence: false },
                metaDataVisible: true,
                wholeForm: false,
                availableParent: ["edit"],
                dataEditable: false,
                columns: {
                    visible: ["NoteEntry"],
                    hidden: ["Title", "DCMain", "Sequence", "CurrentStatus"]
                },
                form: {
                    columns: [{
                        name: "NoteEntry",
                        bootstrapGridOverride: {
                            class: "col-md-12"
                        },
                        css: {}
                    }]
                },
                table: {
                    css: {
                        "width": "200px",
                        "min-width": "200px"
                    },
                    columns: [{
                        name: "Title",
                        css: {
                            "width": "300px",
                            "min-width": "300px"
                        }
                    }]
                },
                search: [""]
            }]
        },
        {
            name: "P11",
            tabTitle: "Clearance Priorities",
            search: [""],
            singular: "Clearance Priority",
            config: true
        },
        {
            name: "S11",
            tabTitle: "Clearance Sources",
            search: [""],
            singular: "Clearance Source",
            config: true
        },
        {
            name: "M11",
            tabTitle: "Markings",
            search: [""],
            singular: "Marking",
            config: true
        },
        {
            name: "PC11",
            tabTitle: "Portfolio Categories",
            search: [""],
            singular: "Portfolio Category",
            config: true
        },
        {
            name: "LP11",
            tabTitle: "Lead Portfolios",
            search: [""],
            singular: "Lead Portfolio",
            config: true
        },
        {
            name: "ST11",
            tabTitle: "Doc Status",
            search: [""],
            singular: "Document Status",
            config: true
        },
        {
            name: "UT11",
            tabTitle: "Role Types",
            search: [""],
            singular: "Role Type",
            config: true
        }
        ]
    });
});

