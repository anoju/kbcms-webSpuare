/*amd /cm/template/design_system/design_system_main.xml 3673 f1a52e9589fe917d69adc76c727922295102adce193e070aa392b297219d7a4b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/base.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/template/design_system/design_system.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/template/design_system/design_system.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.btnDsSlide_onclick = function () {
    $(".designSystem_layout").toggleClass("hide_menu");
};

scwin.onpageload = function() {
};

scwin.btn_components_onclick = function() {
    var parentComp = this.getParent();
    if (!parentComp.hasClass("on")){
        parentComp.toggleClass("on");
        btn_guid.getParent().removeClass("on");
        btn_template.getParent().removeClass("on");
        wf_main.setSrc("/cm/template/design_system/design_system.xml");
    }
};

scwin.btn_guide_onclick = function() {
    var parentComp = this.getParent();
    if (!parentComp.hasClass("on")){
        parentComp.toggleClass("on");
        btn_components.getParent().removeClass("on");
        btn_template.getParent().removeClass("on");
        wf_main.setSrc("/cm/template/design_system/design_system_guide.xml");
    }
};

scwin.btn_template_onclick = function() {
    var parentComp = this.getParent();
    if (!parentComp.hasClass("on")){
        parentComp.toggleClass("on");
        btn_guid.getParent().removeClass("on");
        btn_components.getParent().removeClass("on");
        wf_main.setSrc("/cm/template/design_system/design_system_template.xml");
    }
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'dswrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dsheader',id:'dsheaderGrp',style:''},E:[{T:1,N:'xf:group',A:{class:'logo',id:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_designSystem_slide','ev:onclick':'scwin.btnDsSlide_onclick',id:'btnDsSlide',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'WebSquare',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'DesignSystem',style:''}}]},{T:1,N:'xf:group',A:{class:'gnb_menu',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'}},{T:1,N:'xf:group',A:{class:'on',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_components_onclick',id:'btn_components',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Components'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_template',outerDiv:'false',style:'','ev:onclick':'scwin.btn_template_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Template'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li',class:''},E:[{T:1,N:'w2:anchor',A:{id:'btn_guid',outerDiv:'false',style:'','ev:onclick':'scwin.btn_guide_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DesignSystem Guide'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'dscontainer',id:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wf_main',src:'/cm/template/design_system/design_system.xml'}}]}]}]}]}]})