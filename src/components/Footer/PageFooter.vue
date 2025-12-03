<template>
  <footer class="bg-gray-100 border-t border-gray-200 pt-12 ">
    <div class="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">

      <!-- Company Info -->
      <div>
        <div class="flex items-center mb-4">
          <img src="/images/Logo.png" alt="Melon Mart Logo" class="h-10 w-auto mr-2" />
          <span class="text-xl font-bold text-green-700">Melon</span>
        </div>
        <p class="text-gray-600 mb-4">
          Fresh groceries delivered to your door. We believe in quality, sustainability, and convenience.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-gray-500 hover:text-green-600 transition-colors">
            <i class="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-green-600 transition-colors">
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-green-600 transition-colors">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-green-600 transition-colors">
            <i class="fab fa-pinterest text-xl"></i>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-4">Quick Links</h3>
        <ul class="space-y-2 text-gray-600">
          <li><a href="#" class="hover:text-green-600 transition-colors">Home</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Shop All Categories</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Hot Deals</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">About Us</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Customer Service -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-4">Customer Service</h3>
        <ul class="space-y-2 text-gray-600">
          <li><a href="#" class="hover:text-green-600 transition-colors">Help Center</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Track Order</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Returns & Refunds</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">Shipping Info</a></li>
          <li><a href="#" class="hover:text-green-600 transition-colors">FAQs</a></li>
        </ul>
      </div>

      <!-- Newsletter & Contact -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-4">Stay Updated</h3>
        <p class="text-gray-600 mb-4">Subscribe to our newsletter for exclusive deals and fresh produce alerts.</p>
        <form class="mb-4">
          <div class="flex">
            <input
              type="email"
              placeholder="Your email address"
              class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              class="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div class="mt-4">
          <p class="text-gray-600 flex items-center">
            <i class="fas fa-phone-alt mr-2 text-green-600"></i>
            <span>099 777 888</span>
          </p>
          <p class="text-gray-600 flex items-center mt-2">
            <i class="fas fa-envelope mr-2 text-green-600"></i>
            <span>support@melonmart.com</span>
          </p>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
      <p>&copy; {{ currentYear }} Melon Mart & Grocery. All rights reserved.</p>
      <p class="mt-2">
        <a href="#" class="mx-2 hover:text-green-600">Privacy Policy</a> |
        <a href="#" class="mx-2 hover:text-green-600">Terms of Service</a> |
        <a href="#" class="mx-2 hover:text-green-600">Cookie Policy</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: #f9fafb;
}
</style>
