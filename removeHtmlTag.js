function removeHtmlTag(e,a){for(var t=e.split("<"),s=0;s<t.length;s++)-1!=t[s].indexOf(">")&&(t[s]=t[s].substring(t[s].indexOf(">")+1,t[s].length));return t=t.join(""),t=t.substring(0,a-1)}function showrecentposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),g=(postdate.split("-")[0],0);g<p.length;g++)if(parseInt(h)==p[g]){h=f[g];break}var v='<li><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="70" height="40" class="alignleft" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><a href="'+r+'">'+l+'</a><div class="clear"></div></li>';document.write(v),j++}}function showrecentposts1a1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),g=(postdate.split("-")[0],0);g<p.length;g++)if(parseInt(h)==p[g]){h=f[g];break}var v='<li><a href="'+r+'">'+l+"</a></li>";document.write(v),j++}}function showrecentposts1a2(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),g=(postdate.split("-")[0],0);g<p.length;g++)if(parseInt(h)==p[g]){h=f[g];break}var v='<div class="featuredpost"><p><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="95" height="50" class="aligncenter" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2></p></div>";document.write(v),j++}}function showrecentposts1a(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="320" height="210" class="aligncenter" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts){var y='<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[t]+'"><span class="icon-photo"></span></a><a href="'+r+'">'+l+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+" comment</a></span></span>"+removeHtmlTag(m,summaryPost2)+"...</p></div></li></ul>";document.write(y)}j++}document.write("")}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="featuredpost"><h2 class="posttitle bigposttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts){var y='<div class="featuredpost lastpost"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="70" height="70" class=" " src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost)+' [...]</p><span class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span></span><div class="borderdot"></div></div>';document.write(y)}j++}document.write("")}function showrecentposts2b(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v,y='<a class="headline_title" href="'+r+'">'+l+"</a> - <p>"+k+" ~ </p>";document.write(y),j++}}function showrecentposts2a1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v,y='<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[t]+'"><span class="icon-photo"></span></a><a href="'+r+'">'+l+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+" comment</a></span></span>"+removeHtmlTag(m,summaryPost2)+"...</p></div></li></ul>";document.write(y),j++}}function showrecentposts2(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="featuredpost"><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts){var y='<div class="featuredpost "><div class="flow_hide"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="70" height="45" class=" " src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2></div><p>"+removeHtmlTag(m,summaryPosti)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}j++}document.write("")}function showrecentposts2a(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts6;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="300" height="160" class="aligncenter" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle bigposttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts2){var y='<div class="featuredpost"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="90" height="90" class="alignnone" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>1&&t<numposts){var y='<div class="lastpost ulpost2"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="140" height="100" class="aligncenter" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h3 class="posttitle"><a href="'+r+'">'+l+"</a></h3></div>";document.write(y)}j++}document.write("")}function showrecentposts3(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v,y='<li class="car"><div class="slide_media"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="144" height="100" class="alignnone " src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><span class="columz"> '+k+'</span><h2 class="posttitle"> <a href="'+r+'">'+l+"</a></h2></li>";document.write(y),j++}}function showrecentposts3a(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="left border_right_20"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="200" height="145" class=" " src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts){var y='<ul class="right morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[t]+'"><span class="icon-photo"></span></a><a href="'+r+'">'+l+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+" comment</a></span></span>"+removeHtmlTag(m,summaryPost2)+"...</p></div></li></ul>";document.write(y)}j++}document.write("")}function showrecentposts4(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts4;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v;if(0==t){var y='<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[t]+'"><img width="225" height="123" class="aligncenter" src="'+img[t]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+r+'">'+l+"</a></h2><p>"+removeHtmlTag(m,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+' comment</a></span><span class="meta_permalink"><a href="'+r+'">more</a></span></p></div>';document.write(y)}if(t>0&&t<numposts){var y='<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[t]+'"><span class="icon-photo"></span></a><a href="'+r+'">'+l+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+k+'</span><span class="meta_comment"><a href="'+r+'">'+i+" comment</a></span></span>"+removeHtmlTag(m,summaryPost2)+"...</p></div></li></ul>";document.write(y)}j++}document.write("")}function showrecentposts7(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts11;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v,y='<div class="subleftpost"><h2 class="posttitle"><a href="'+r+'">'+l+'</a></h2></h4><ul class="morestories"><li><a href="#summary" class="item-more"></a>'+k+' <div class="lisummary"><p>'+removeHtmlTag(m,summaryPost2)+"...</p></div></li></ul></div>";document.write(y),j++}}function showrecentposts7a(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),g=(postdate.split("-")[0],0);g<p.length;g++)if(parseInt(h)==p[g]){h=f[g];break}var v='<li class="slider1Image"><a href="'+r+'"><img width="430" height="255" class="alignnone" src="'+img[t]+'"/></a><span class="sliderbottom"><b><a href="'+r+'">'+l+"</a></b></span></li>";document.write(v),j++}}function showrecentposts8(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;t<numposts9;t++){var i,r,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){r=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){i=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var p=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],h=postdate.split("-")[2].substring(0,2),g=postdate.split("-")[1],v=postdate.split("-")[0],u=0;u<p.length;u++)if(parseInt(g)==p[u]){g=f[u];break}var k=h+" "+g+" "+v,y='<li><a href="'+r+'"><img width="50" height="50" class="alignleft" src="'+img[t]+'"/></a><a href="'+r+'">'+l+"</a><p>"+k+" / "+i+' comments</p><div class="clear"></div></li>';document.write(y),j++}}imgr=new Array,imgr[0]="http://2.bp.blogspot.com/-pefqrr1pQCQ/VmohOn4H8cI/AAAAAAAAAtg/TuNFb5CoTZE/s1600/empty_thumb.gif",showRandomImg=!0,aBold=!0,summaryPost2=150,summaryPost=100,summaryPosti=70,summaryPostQk=500,summaryTitle=25,numposts=9,numposts1=1,numposts2=2,numposts3=3,numposts4=4,numposts5=5,numposts6=6,numposts7=7,numposts8=8,numposts9=9,numposts10=15,numposts11=12,label1="ΟΙΚΟΝΟΜΙΑ",Title1="ΟΙΚΟΝΟΜΙΑ",label2="ΚΟΣΜΟΣ",Title2="ΚΟΣΜΟΣ",label3="ΕΠΙΚΑΙΡΟΤΗΤΑ",Title3="Slider",label4="ΠΟΛΙΤΙΚΗ",Title4="ΠΟΛΙΤΙΚΗ",label5="ΟΡΘΟΔΟΞΙΑ",Title5="ΟΡΘΟΔΟΞΙΑ",label6="ΟΜΟΓΕΝΕΙΑ",Title6="ΟΜΟΓΕΝΕΙΑ",label7="ΚΥΠΡΟΣ",Title7="ΚΥΠΡΟΣ",label8="ΕΘΝΙΚΑ ΘΕΜΑΤΑ",Title8="ΕΘΝΙΚΑ ΘΕΜΑΤΑ",label9="ΕΝΟΠΛΕΣ ΔΥΝΑΜΕΙΣ",Title9="ΕΝΟΠΛΕΣ ΔΥΝΑΜΕΙΣ",label10="ΣΩΜΑΤΑ ΑΣΦΑΛΕΙΑΣ",Title10="ΣΩΜΑΤΑ ΑΣΦΑΛΕΙΑΣ",label11="ΚΟΙΝΩΝΙΑ",Title11="ΚΟΙΝΩΝΙΑ";
