/**
 * 公共提示（模态框）
 * hasMask 有无遮罩层
 * content 提示内容
 * id 自定义id 必传
 * parentId 自定义id的父元素的id 必传
 * type success或者fail
 */
function tipModal(content,id,parentId,type,hasMask) {
  if(!content || !id || !parentId) return
  let mask = ''
  if (!!hasMask) {
    mask = `<div class="modal_mask"></div>`;
  } else {
    mask = '';
  }
  !!type ? type : type = 'success'
  let modalHtml =
  `${mask}
  <div class="tip_box"><img src="./images/${type}.png" alt=""><p>${content}</p></div>
  `;
  let modalBox = document.createElement('div');
  let parentDiv = document.getElementById(parentId);
  modalBox.id = id;
  modalBox.innerHTML = modalHtml;
  parentDiv.appendChild(modalBox);
  setTimeout(function(){
    let tipDiv = document.getElementById(id);
    tipDiv.remove();    
    parentDiv.style.display = 'none';
  },2000)

}