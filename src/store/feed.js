import { defineStore } from "pinia";
const testData = [
  {
    id: 12,
    content: "봄 같은 날씨 너무 좋아요",
    created_at: "2025-01-11T07:41:56.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 11,
    content: "코딩은 재밌어!",
    created_at: "2025-01-10T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 10,
    content: "오늘도 Vue 공부중",
    created_at: "2025-01-09T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 9,
    content: "Pinia 너무 편하다",
    created_at: "2025-01-08T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 8,
    content: "Store로 상태관리 성공",
    created_at: "2025-01-07T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 7,
    content: "컴포넌트 분리 완료",
    created_at: "2025-01-06T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 6,
    content: "Vue 재밌다",
    created_at: "2025-01-05T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 5,
    content: "Frontend 공부 중",
    created_at: "2025-01-04T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 4,
    content: "오늘 과제 완료",
    created_at: "2025-01-03T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 3,
    content: "Pinia devtool 확인!",
    created_at: "2025-01-02T10:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
]

export const useFeedStore = defineStore("feed", {
  state: () => ({
    feedData: [],
  }),

  actions: {
    getFeedData() {
      this.feedData = testData
    },
    removeFeed(id) {
      this.feedData = this.feedData.filter(feed => feed.id !== id)
    }

  },
});