<template>
  <div class="feed-list-container">
    <FeedItem v-for="feed in feedStore.feedData" :key="feed.id" :feed="feed" class="feed-container">
    </FeedItem>
  </div>
</template>


<script>
import { useFeedStore } from '@/store/feed';
import FeedItem from './FeedItem.vue';

export default {
  name: "FeedList",
  components: {
    FeedItem
  },
  data() {
    return {
      feedStore: useFeedStore(),
    }
  },
  created() {
    this.feedStore.getFeedData();
  }
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
  ;
}

.feed-container {
  height: 80px;
  background-color: white;
  margin: 10px 0px;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

}

.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.feed-content {
  padding: 1%;
}

.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>