class DataHolder {
	regex_list = [];
	regex_list_changes = false;
	wecategory_list = []; // Fill No Of Web Category wth their Count
	wecategory_list_changes = false; // Fill No Of Web Category wth their Count
}

data_holder = new DataHolder();

// Testing Initialize
data_holder.regex_list = ['google.com', 'yahoo.comn', ".google.com", ".*ads.*"]
data_holder.wecategory_list = ['Adult Content', 'YouTube Videos', "Advertisements and Trackers", "Blacklist"]

class Dashboard_UI_Manager {

	static toggle_mainbar(mainbar_option_toShow) {
		document.querySelectorAll(`.main-content-right-mainbar div[class^=container-]`).forEach((oneMainbarOption) => oneMainbarOption.hidden = true);
		if (mainbar_option_toShow != undefined) document.querySelector(mainbar_option_toShow).hidden = false;
	}

	static toggle_sidebar(sidebar_option_toActive) {
		document.querySelectorAll(".main-content-left-sidebar .sidebar-list-group li").forEach((oneSidebarOption) => oneSidebarOption.classList.remove("active"));
		if (sidebar_option_toActive != undefined) sidebar_option_toActive.classList.add("active");
	}

	static setup_leftbar_to_mainbar_mapping() {
		this.toggle_mainbar(`.main-content-right-mainbar .container-reports`);
		document.querySelectorAll(".main-content-left-sidebar .sidebar-list-group li")
			.forEach((oneSidebarOption) => {
				oneSidebarOption.addEventListener("click", (event) => {
					let currentSidebarOptionID = event.target.id;
					this.toggle_sidebar(event.target); // Toggle Sidebar
					this.toggle_mainbar(`.main-content-right-mainbar .${currentSidebarOptionID}`); // Toggle Mainbar
				});
			});
	}
}


class Reports_UI_Manager {

}


class Custom_Reports_UI_Manager {

}


class WebCategory_UI_Manager {

}


class RegexBuilder_UI_Manager {

	static regex_list_creator() {
		let regex_list_ul = `<ul class="sidebar-list-group list-group m-2">`

		data_holder.regex_list.forEach((one_regex) => {
			regex_list_ul += `<li class="list-group-item d-flex justify-content-between align-items-center">
									${one_regex}
								<span class="delete-this-regex badge bg-danger rounded-pill">Delete</span>
							</li>`
		})

		regex_list_ul += `</ul>`
		document.querySelector('.regex-displayer').innerHTML = regex_list_ul;
	}

	static add_regex_to_list(regex_string) {
		if (regex_string == undefined) {
			alert("Enpty Data")
		} else {
			data_holder.regex_list.push(regex_string)
			this.regex_list_creator()
		}
	}
}


class Config_UI_Manager {

}


class Helper_UI_Manager {

}


class API_Manager {

}


function charts_test() {
	var options = {
		chart: {
			type: 'line',
			height: '360px',
			width: '420px'

		},
		series: [{
			name: 'sales',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		}],
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		}
	}

	var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
	var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
	var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
	var chart4 = new ApexCharts(document.querySelector("#chart4"), options);

	chart1.render();
	chart2.render();
	chart3.render();
	chart4.render();
}

// Charts Test
charts_test();

// Initialize Dashboard related Events & Functions
Dashboard_UI_Manager.setup_leftbar_to_mainbar_mapping();

RegexBuilder_UI_Manager.regex_list_creator();
document.querySelector('.add-to-regex-list').addEventListener('click', (event) => {
	regex_string = document.querySelector('.regex-string').value;
	console.log("Regex -> ", regex_string.trim())
	if (regex_string.trim() !== "") RegexBuilder_UI_Manager.add_regex_to_list(regex_string.trim());
})