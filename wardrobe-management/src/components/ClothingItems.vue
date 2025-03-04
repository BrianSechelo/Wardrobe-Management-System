<script setup>
import { ref, onMounted } from "vue";
import { getClothingItems, addClothingItem, deleteClothingItem } from "../services/api";

const clothingItems = ref([]);
const newItem = ref({ name: "", category: "" });

const fetchClothingItems = async () => {
  try {
    const response = await getClothingItems();
    clothingItems.value = response.data;
  } catch (error) {
    console.error("Error fetching clothing items:", error);
  }
};

const addItem = async () => {
  try {
    await addClothingItem(newItem.value);
    fetchClothingItems();
    newItem.value = { name: "", category: "" };
  } catch (error) {
    console.error("Error adding clothing item:", error);
  }
};

const removeItem = async (id) => {
  try {
    await deleteClothingItem(id);
    fetchClothingItems();
  } catch (error) {
    console.error("Error deleting clothing item:", error);
  }
};

onMounted(fetchClothingItems);
</script>

<template>
  <div>
    <h2>Clothing Items</h2>
    <ul>
      <li v-for="item in clothingItems" :key="item.id">
        {{ item.name }} - {{ item.category }}
        <button @click="removeItem(item.id)">Delete</button>
      </li>
    </ul>

    <h3>Add New Item</h3>
    <input v-model="newItem.name" placeholder="Name" />
    <input v-model="newItem.category" placeholder="Category" />
    <button @click="addItem">Add Item</button>
  </div>
</template>