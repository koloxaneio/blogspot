function real_posttitle(e){for(var t=0;t<title_arr.length;t++)if(title_arr[t][0]==e)return title_arr[t][1];return err}function showrecentposts(e){var t=999999;for(i=0;i<t;i++){var r,n,l=e.feed.entry[i];if(i==e.feed.entry.length)break;for(var a=0;200>a;a++)if("self"==l.link[a].rel&&(r=l.link[a].href,r=r.substr(r.lastIndexOf("/")+1,100)),"alternate"==l.link[a].rel){n=l.link[a].title;break}title_arr[arr]=r+"&#176;"+n,title_arr[arr]=title_arr[arr].split("&#176;"),++arr}}function unfold(e){var t=e.id.substr(8,10);e.src==icon_expand?(e.src=icon_collapse,document.getElementById("com_id"+t).style.display="block"):(e.src=icon_expand,document.getElementById("com_id"+t).style.display="none")}function unfold_all(e){try{for(var t=0;maxcomments>t;t++)document.getElementById("com_id"+t).style.display="block",document.getElementById("click_id"+t).src=icon_collapse}catch(r){}e.value="Show all"}function fold_all(e){try{for(var t=0;maxcomments>t;t++)document.getElementById("com_id"+t).style.display="none",document.getElementById("click_id"+t).src=icon_expand}catch(r){}e.value="Hide all"}function showrecentcomments(e){var t,r=999999,n=0;for(n=0;r>n;n++){var i,l=e.feed.entry[n],a=!1;if(n==e.feed.entry.length)break;for(var o=0;o<l.link.length;o++)if("self"==l.link[o].rel&&(t=l.link[o].href.split("/"),t=t[5]),"alternate"==l.link[o].rel){i=l.link[o].href;break}var c=i.split("#");c=c[0];var s=c.split("/");s=s[5],s=s.split(".html"),s=s[0];var m="";try{m=l.author[0].uri.$t}catch(d){a=!0}var u=real_posttitle(t);u==err&&(u=s.replace(/-/g," "));var f=l.published.$t,p=f.substring(0,4),g=f.substring(5,7),y=f.substring(8,10),v=f.substr(11,5),_=new Array;if(_[1]="Ιανουαρίου",_[2]="Φεβρουαρίου",_[3]="Μαρτίου",_[4]="Απριλίου",_[5]="Μαϊου",_[6]="Ιουνίου",_[7]="Ιουλίου",_[8]="Αυγούστου",_[9]="Σεπτεμβρίου",_[10]="Οκτωβρίου",_[11]="Νοεμβρίου",_[12]="Δεκεμβρίου","content"in l)var h=l.content.$t;else if("summary"in l)var h=l.summary.$t;else var h="";if(maxcomments>n){if(tgl){tgl=!1;var k="row-a"}else{tgl=!0;var k="row-b"}document.write('<div class="'+k+' row-div"><img id="click_id'+n),document.write('" style="cursor:pointer;" onclick="unfold(this);"'),document.write('src="'+icon_expand+'" />&nbsp;'),document.write(" "+y+" "+_[parseInt(g,10)]+" "+p),document.write(", ώρα "+v+", "),document.write(0==a?'Ο χρήστης <a href="'+m+'">'+l.author[0].name.$t+"</a> ":l.author[0].name.$t+" "),document.write('σχολίασε στο άρθρο <a href="'+i+'">'+u+"</a>"),document.write("</div>"),document.write('<div class="comments1" id="com_id'+n+'" style="margin-left:1.3em;display:none;">'+h+"</div>")}}document.getElementById("numcom").innerHTML=n}var tgl=!1,title_arr=new Array,arr=0,err="[err]",icon_expand="http://4.bp.blogspot.com/-0uMfSp1t_gQ/VmoivZolzQI/AAAAAAAAAvY/CkxpvSXn-H8/s1600/icon-plus.png",icon_collapse="http://1.bp.blogspot.com/-UyMmHB1na-4/VmoiqIrYrHI/AAAAAAAAAvQ/SWVOVXmM5EE/s1600/icon-minus.png",maxcomments=20;
