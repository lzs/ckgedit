CKEDITOR.dialog.add("smiley",function(l){var e=l.config,b=l.lang.smiley,n=e.smiley_images,f=e.smiley_columns||8,h;var m;var o=function(i,u){var v=i.data.getTarget(),t=v.getName();if(t=="a"){v=v.getChild(0)}else{if(t!="img"){return}}var x=v.getAttribute("cke_src"),w=v.getAttribute("title"),s=v.getAttribute("class");if(s.match(/doku/)){l.insertText(w+" ");m.hide();i.data.preventDefault();return}var r=l.document.createElement("img",{attributes:{src:x,"data-cke-saved-src":x,title:w,alt:w,width:v.$.width,height:v.$.height}});l.insertElement(r);m.hide();i.data.preventDefault()};var g=CKEDITOR.tools.addFunction(function(r,i){r=new CKEDITOR.dom.event(r);i=new CKEDITOR.dom.element(i);var t,s;var v=r.getKeystroke(),u=l.lang.dir=="rtl";switch(v){case 38:if((t=i.getParent().getParent().getPrevious())){s=t.getChild([i.getParent().getIndex(),0]);s.focus()}r.preventDefault();break;case 40:if((t=i.getParent().getParent().getNext())){s=t.getChild([i.getParent().getIndex(),0]);if(s){s.focus()}}r.preventDefault();break;case 32:o({data:r});r.preventDefault();break;case u?37:39:if((t=i.getParent().getNext())){s=t.getChild(0);s.focus();r.preventDefault(true)}else{if((t=i.getParent().getParent().getNext())){s=t.getChild([0,0]);if(s){s.focus()}r.preventDefault(true)}}break;case u?39:37:if((t=i.getParent().getPrevious())){s=t.getChild(0);s.focus();r.preventDefault(true)}else{if((t=i.getParent().getParent().getPrevious())){s=t.getLast().getChild(0);s.focus();r.preventDefault(true)}}break;default:return}});var a=CKEDITOR.tools.getNextId()+"_smiley_emtions_label";var j=['<div><span id="'+a+'" class="cke_voice_label">'+b.options+"</span>",'<table role="listbox" aria-labelledby="'+a+'" style="width:100%;height:100%;border-collapse:separate;" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"];var d;if(e.dokuSmileyConfImages){d=e.dokuSmileyConfImages}else{d=e.dokuSmileyImages}var q=d.length;for(h=0;h<q;h++){if(h%f===0){j.push('<tr role="presentation">')}var c="cke_smile_label_"+h+"_"+CKEDITOR.tools.getNextNumber();var k=d[h][0];j.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(h+1)+'"',' aria-setsize="'+q+'"',' aria-labelledby="'+c+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',g,', event, this );">','<img class="cke_hand doku" title="',k,'" cke_src="',CKEDITOR.tools.htmlEncode(e.dokuSmileyPath+d[h][1]),'" alt="',k,'"',' src="',CKEDITOR.tools.htmlEncode(e.dokuSmileyPath+d[h][1]),'"',(CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":""),'><span id="'+c+'" class="cke_voice_label">'+k+"</span></a>","</td>");if(h%f==f-1){j.push("</tr>")}}if(h<f-1){for(;h<f-1;h++){j.push("<td></td>")}j.push("</tr>")}j.push("<tr>");d=e.dokuFixmeSmiley;for(h=0;h<d.length;h++){var k=d[h][0];j.push('<td colspan="4" class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(h+1)+'"',' aria-setsize="'+q+'"',' aria-labelledby="'+c+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',g,', event, this );">','<img class="cke_hand doku" title="',k,'" cke_src="',CKEDITOR.tools.htmlEncode(e.dokuSmileyPath+d[h][1]),'" alt="',k,'"',' src="',CKEDITOR.tools.htmlEncode(e.dokuSmileyPath+d[h][1]),'"',(CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":""),'><span id="'+c+'" class="cke_voice_label">'+k+"</span></a>","</td>")}j.push("</tr>");var q=n.length;for(h=0;h<q;h++){if(h%f===0){j.push('<tr role="presentation">')}var c="cke_smile_label_"+h+"_"+CKEDITOR.tools.getNextNumber();j.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(h+1)+'"',' aria-setsize="'+q+'"',' aria-labelledby="'+c+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',g,', event, this );">','<img class="cke_hand" title="',e.smiley_descriptions[h],'" cke_src="',CKEDITOR.tools.htmlEncode(e.smiley_path+n[h]),'" alt="',e.smiley_descriptions[h],'"',' src="',CKEDITOR.tools.htmlEncode(e.smiley_path+n[h]),'"',(CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":""),'><span id="'+c+'" class="cke_voice_label">'+e.smiley_descriptions[h]+"</span></a>","</td>");if(h%f==f-1){j.push("</tr>")}}if(h<f-1){for(;h<f-1;h++){j.push("<td></td>")}j.push("</tr>")}j.push("</tbody></table></div>");var p={type:"html",id:"smileySelector",html:j.join(""),onLoad:function(i){m=i.sender},focus:function(){var i=this;setTimeout(function(){var r=i.getElement().getElementsByTag("a").getItem(0);r.focus()},0)},onClick:o,style:"width: 100%; border-collapse: separate;"};return{title:l.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[p]}],buttons:[CKEDITOR.dialog.cancelButton]}});