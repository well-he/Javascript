//面向对象Tab栏切换
/*jslint esversion:6*/
let that;
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
class Tab {
  constructor(id) {
    //获取元素
    that = this;
    this.main = document.querySelector(id);
    this.add = this.main.querySelector('.tabadd');
    this.li_f = this.main.querySelector('.firstnav ul');
    this.sec_f = this.main.querySelector('.tabscon');
    this.init();
  }
  //获取所有的li和section
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.close = this.main.querySelectorAll('.close');
  }
  init() {
    this.updateNode();
    // init 初始化 让相关元素绑定事件
    this.add.onclick = this.addTab;
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.close[i].onclick = this.removeTab;
    }
  }
  //1.切换功能
  toggleTab() {
    that.clearClass();
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }
  //清除类
  clearClass() {
    for (let i = 0; i < that.lis.length; i++) {
      that.lis[i].className = '';
      that.sections[i].className = '';
    }
  }
  //2.添加功能
  addTab() {
    that.clearClass();
    let li = `<li class="liactive"><span>新选项卡</span><span class="close"></span></li>`.trim(),
      section = `<section class="conactive">新内容</section>`.trim();
    that.li_f.insertAdjacentHTML('beforeend', li);
    that.sec_f.insertAdjacentHTML('beforeend', section);
    that.init();

  }
  //3.删除功能
  removeTab(e) {
    e.stopPropagation(); //阻止冒泡
    let index = this.parentNode.index;
    console.log(index);
    let len = that.lis.length;
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    if ((!index > 0)) {
      that.li_f.textContent = '空';
      return;
    }
    index--;
    that.lis[index].click();

  }
  //4.修改功能
  editTab() {}
}
const tab = new Tab('#tab');
/*    if ((!index > 0)) {
      that.sec_f.textContent = '空';
      return;
    }
    // if (len == 0)
    if (index < 0 && len != 0) {
      alert(1);
    }*/