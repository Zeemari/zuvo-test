<template>
  <teleport to="body">
    <div v-if="show" class="modal fade show" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ user?.name || "User Details" }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="$emit('close')"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Email:</strong> {{ user?.email || "N/A" }}</p>
            <p><strong>Phone:</strong> {{ user?.phone || "N/A" }}</p>
            <p><strong>Company:</strong> {{ user?.company?.name || "N/A" }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show" class="modal-backdrop fade show"></div>
  </teleport>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  show: Boolean,
  user: Object,
});
</script>
