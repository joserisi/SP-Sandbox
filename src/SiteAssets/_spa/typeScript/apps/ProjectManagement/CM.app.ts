import * as $ from "jquery";
import * as spCRUD from"../../spa.spCRUD";

var Contracts = <spaLoadListStruct>{};
{
	Contracts.name = "Contracts";
	Contracts.search = [""];
	Contracts.singular = "Contract";
	Contracts.table = {
		css: { "width": "200px", "min-width": "200px" },
		columns: [
			{
				name: "Title",
				css: { "width": "100px", "min-width": "100px" }
			}
		]
	};
}

var Contractors = <spaLoadListStruct>{};
{
	Contractors.name =  "Contractors";
	Contractors.search = [""];
	Contractors.singular = "Contractor";
	Contractors.path = _spPageContextInfo.webAbsoluteUrl;
}
var Projects = <spaLoadListStruct>{};
{
	Projects.name = "Projects",
	Projects.search = [""],
	Projects.singular = "Project"
};

var spLists = [
    Contracts,
	Contractors,
	Projects
];

$(document).ready(function () {

	spCRUD.spCRUD.clear({});

	spCRUD.spCRUD.getList({
        objects: spLists
    });
});
