<style>
  @import './css/nav.css';
  #mini {
    border-bottom:1px solid rgba(255,255,255,.1);
  }
</style>

</head>
<template>
  <div class="nav">
    <div class="nav-top">
      <div id="mini">
        <img src="./images/mini.png">
      </div>
    </div>
    <ul>
      <li class="nav-item">
        <a href="javascript:;">
          <i class="my-icon nav-icon icon_1"></i>
          <span>网站配置</span>
          <i class="my-icon nav-more"></i>
        </a>
        <ul>
          <li>
            <a href="javascript:;">
              <span>网站设置</span>
            </a>
          </li>          
        </ul>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript" src="./js/nav.js"></script>
