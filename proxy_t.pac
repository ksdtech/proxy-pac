// make sure to deny access to this file if not in school network

function FindProxyForURL(url, host) {
	// learned the hard way: no calls to "alert" in Safari: alert is undefined 
	// variable strings to return
	// var proxy_mcoe = "PROXY proxy.marin.k12.ca.us:80";
	var proxy_mcoe  = "PROXY proxy.marinschools.org:8080";
	var proxy_local = "PROXY 172.16.121.234:8180" 
	var proxy_no    = "DIRECT";
	
	// https passes thorugh
	if (shExpMatch(url, "https:*")) {
		// proxyLog("DIRECT: https", host); 
		return proxy_no; 
	}

	if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
		isInNet(host, "127.0.0.1", "255.255.255.255") ||
	        isInNet(host, "137.164.121.224", "255.255.255.224") || 
	        isInNet(host, "172.16.121.0", "255.255.255.0")) {
		// proxyLog("DIRECT: dmz", host);
		return proxy_no;
	}
	
	// pass-through all kentfieldschools.org stuff except these
	if (dnsDomainIs(host, ".kentfieldschools.org") &&
		!localHostOrDomainIs(host, "www.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "gcal.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "gdocs.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "groups.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "pages.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "wave.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "questions.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "g.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "google.kentfieldschools.org") &&
		!localHostOrDomainIs(host, "gmail.kentfieldschools.org")) {
		// proxyLog("DIRECT: internal ksd sites", host);
		return proxy_no;
	}

	// YouTube
	if (dnsDomainIs(host, ".youtube.com") || 
	   dnsDomainIs(host, ".ytimg.com")) { 
		// proxyLog("DIRECT: youtube", host);
		return proxy_no; 
	}
	if (isInNet(host, "74.125.224.0", "255.255.255.0") ||
		isInNet(host, "208.65.153.238", "255.255.255.255") ||
		isInNet(host, "208.65.153.251", "255.255.255.255") ||
		isInNet(host, "208.65.153.253", "255.255.255.255") ||
		isInNet(host, "208.117.236.69", "255.255.255.255")) {
		// proxyLog("DIRECT: youtube", host);
		return proxy_no; 
	}

 
  // Report Card Maker - clearvisiontech.com/.net
	if (dnsDomainIs(host, ".clearvisiontech.com") ||
		dnsDomainIs(host, ".clearvisiontech.net")) { 
		// proxyLog("DIRECT: clearvision", host);
		return proxy_no; 
	}
	if (isInNet(host, "66.175.58.9", "255.255.255.255") ||
	   isInNet(host, "69.175.12.250", "255.255.255.255")) { 
		// proxyLog("DIRECT: clearvision", host);
		return proxy_no; 
	}

	// miscellaneous others
	if (isPlainHostName(host)) {
		// proxyLog("DIRECT: plain host", host); 
		return proxy_no; 
	}
	
	if (dnsDomainIs(host, ".local")) {
		// proxyLog("DIRECT: local", host); 
		return proxy_no; 
	}
	
	// proxyLog("MCOE PROXY: default", host);
	return proxy_mcoe;
}

