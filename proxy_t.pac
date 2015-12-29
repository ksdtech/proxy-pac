// make sure to deny access to this file if not in school network

function FindProxyForURL(url, host) {
	// learned the hard way: no calls to "alert" in Safari: alert is undefined 
	// variable strings to return
	var proxy_mcoe  = "PROXY proxy.marinschools.org:80";
	var proxy_local = "PROXY 172.16.121.234:8180" 
	var proxy_no    = "DIRECT";
	
	return proxy_no;
}

