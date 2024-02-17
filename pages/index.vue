<script setup lang="ts">
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import {convertCurrency} from "../lib/convertCurrency";
import dayjs from "dayjs";

useSeoMeta({
  title: 'Home | CRM System',
})

const dragCardRef = ref<ICar | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
const {data, isLoading, refetch} = useKanbanQuery()


</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>

    <div v-if="isLoading">Loading...</div>

    <div class="grid grid-cols-5 gap-16">

      <div v-for="(column, index) in data"
        :key="column.id"
           @dragover="handleDragIver"
      >

        <div class="rounded bg-slate-700 py-1 mb-2 text-center">
          {{ column.name }}
        </div>

        <UiCard v-for="card in column.items"
                :key="card.id"
                class="mb-3" draggable="true">

          <UiCardHeader role="button">
            <UiCardTitle>
              {{card.name}}
            </UiCardTitle>

            <UiCardDescription>
              {{convertCurrency(card.price)}}
            </UiCardDescription>

          </UiCardHeader>

          <UiCardContent>
            {{ card.companyName }}
          </UiCardContent>

          <UiCardFooter>
            {{
            dayjs(card.$createdAt).format('DD MMMM YYYY')
            }}
          </UiCardFooter>
        </UiCard>

      </div>

    </div>
  </div>
</template>