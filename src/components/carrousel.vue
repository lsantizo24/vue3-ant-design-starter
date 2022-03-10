<template>
  <a-carousel autoplay>
    <div>
      <h3>
        <img
          class="img1"
          src="https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/83743195_125324672307838_5249573337163628544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHTG1Dd0vREvAotoruDGZygQOU5IvBvMBpA5Tki8G8wGgO20ZPyjA27KsYwiJdeYGsBZU8xv_34tQGNcAWVUlm1&_nc_ohc=NU8RmwX9i6gAX__7X1w&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8FFMSfy8eQEmfjCLsqey-NZLcMpp_DxgUty5xUBtkqyQ&oe=623FC45B"
        />
      </h3>
    </div>
    <div>
      <h3>
        <img
          class="img2"
          src="https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/79387373_102981044542201_2455064844685017088_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeF8BjSZQ2_FZx43KC2iSf1K3nC0Ws8VKxrecLRazxUrGhKRGyJWTk0-vvUfQKo1En1qmpncdsaNW5FP4h2DbVhh&_nc_ohc=AMyBzq-iZRUAX8eBgdh&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-1l_iM5l4_7_bGW1hnkfC0O-XpArxD22C_OWNzopZXtQ&oe=623ED4FF"
        />
      </h3>
    </div>
    <div>
      <h3>
        <img
          class="img3"
          src="https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/89429032_137870271053278_6950834566286278656_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEUt7DBO6naJYfKLpsdxenkb9OUrs0aTfBv05SuzRpN8OrkLMVxIGqfrJrEyRA496RBem5pI70a90NTIHi4Oixc&_nc_ohc=oUwuzRXYBmQAX_6vzZi&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-aFp2tExGCPtwb0CEPu8TGk_DlCh3MbxgQa88b1oAB7A&oe=6250BA41"
        />
      </h3>
    </div>
    <div>
      <h3>
        <img
          class="img4"
          src="https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/89437241_137870427719929_3187976133001871360_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEt0mUaUEq4c920BpHq4XAkDAldFuqHq3YMCV0W6oerdrChlIwN-WPTCmAbKycxlsFYuWk-ER014toEXypmf3zP&_nc_ohc=-8yBfXH_mFIAX-71skN&_nc_ht=scontent.ftij5-1.fna&oh=00_AT9UMKDNlNnCacFxxw7lUL4Z9K2zLvcD0m4kJQyWUie-SQ&oe=624F89FE"
        />
      </h3>
    </div>
  </a-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
    };
  },
});
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.img1 {
  height: 650px;
  width: 100%;
}
.img2 {
  height: 650px;
  width: 100%;
}
.img3 {
  height: 650px;
  width: 100%;
}
.img4 {
  height: 650px;
  width: 100%;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>