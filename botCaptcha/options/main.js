function saveSettings(e) {
	chrome.storage.sync.set({
		"apiKey": apiKey.value,
		"isEnabled": isEnabled.checked,
		"Auto": Auto.checked,
		"AutoClick": AutoClick.checked,
		"service": service.selectedIndex,
		"Delay": Delay.value
	});
}

function restoreSettings(e) {
	chrome.storage.sync.get('apiKey',function(res){
		
		apiKey.value = res.apiKey || "";
		
})

	chrome.storage.sync.get('isEnabled',function(res){
		
		isEnabled.checked = res.isEnabled
		
})
	chrome.storage.sync.get('Auto',function(res){
		
		Auto.checked = res.Auto
		
})

	chrome.storage.sync.get('AutoClick',function(res){
		
		AutoClick.checked = res.AutoClick
		
})


	chrome.storage.sync.get('service',function(res){
		
		service.selectedIndex= res.service
		
})

	chrome.storage.sync.get('Delay',function(res){
		
		Delay.value = res.Delay || "";
		
})

	apiKey.addEventListener('change',saveSettings);
	isEnabled.addEventListener('change',saveSettings);
	service.addEventListener('change',saveSettings);
	Auto.addEventListener('change',saveSettings);
	AutoClick.addEventListener('change',saveSettings);
	Delay.addEventListener('change',saveSettings);
}

document.addEventListener('DOMContentLoaded', restoreSettings);




window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
	  document.getElementById("visit").href = document.getElementById('service').selectedOptions[0].id;
    chrome.tabs.create({url:e.target.href})
	window.close();
  }
})
