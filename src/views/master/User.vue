<template>
  <VContainer>
    <VRow dense>
      <VCol>
        <VTabs class="elevation-3 py-0 my-2" show-arrows>
          <VTab to="/user/info">
            <VIcon left>mdi-account-card-details</VIcon>个人信息
          </VTab>
          <VTab to="/user/record">
            <VIcon left>mdi-timetable</VIcon>操作记录
          </VTab>
          <!-- <VTab @click="getPage(1)">
            <VIcon left>mdi-brain</VIcon>高级统计
          </VTab> -->
        </VTabs>
      </VCol>
    </VRow>
    <RouterView></RouterView>
  </VContainer>
</template>
