// make sure to deny access to this file if not in school network

function FindProxyForURL(url, host) {
	// learned the hard way: no calls to "alert" in Safari: alert is undefined 
	// variable strings to return
	var proxy_mcoe  = "PROXY proxy.marin.k12.ca.us:80";
	var proxy_local = "PROXY 172.16.121.234:8180" 
	var proxy_no    = "DIRECT";
	
	// proxy to our local server to inject YouTube EDU filter header
	if (dnsDomainIs(host, ".youtube.com")) { 
		// proxyLog("LOCAL PROXY: youtube", host);
		return proxy_local; 
	}
	return proxy_no;
}

