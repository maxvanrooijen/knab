function FindProxyForURL(url, host) {
   if (dnsDomainIs(host, ".uknabdstnlhj.net") || dnsDomainIs(host, ".pknabdsdcbjb.net") || dnsDomainIs(host, ".compute.amazonaws.com")) {
	    return "SOCKS5 localhost:13337";
   } else {
	    return "DIRECT";
   }
}
