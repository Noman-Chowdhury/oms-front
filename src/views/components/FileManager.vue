<script setup>
import {ref} from "vue";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import FileList from "@/components/filemanager/FileList.vue";
import FileManagerSidebar from "@/components/filemanager/Sidebar.vue";
import FileManagerSettings from "@/components/filemanager/Settings.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import UploadFileModalComponent from "@/components/modals/UploadFileModalComponent.vue";
import CreateFolderModalComponent from "@/components/modals/CreateFolderModalComponent.vue";
import FileDetailsModalComponent from "@/components/modals/FileDetailsModalComponent.vue";

const allFiles =  ref([
  {
    'folder_name': 'Design',
    'file_quantity': '15',
    'storage_used': '1GB'
  },
  {
    'folder_name': 'Development',
    'file_quantity': '12',
    'storage_used': '3GB'
  },
  {
    'folder_name': 'Sketch Design',
    'file_quantity': '20',
    'storage_used': '4GB'
  },
  {
    'folder_name': 'Project A',
    'file_quantity': '50',
    'storage_used': '6GB'
  },
  {
    'folder_name': 'Admin',
    'file_quantity': '12',
    'storage_used': '3GB'
  },
  {
    'folder_name': 'Applications',
    'file_quantity': '12',
    'storage_used': '3GB'
  },
  {
    'folder_name': 'Image',
    'file_quantity': '12',
    'storage_used': '3GB'
  },
  {
    'folder_name': 'Videos',
    'file_quantity': '12',
    'storage_used': '3GB'
  },
]);

const recentFiles = ref([
  {
    'file_name': 'background.jpg',
    'file_path': new URL('/src/assets/images/auth-bg.png', import.meta.url),
    'file_size': '375KB',
    'file_type': 'JPG',
  },
  {
    'file_name': 'document.pdf',
    'file_path': new URL('/src/assets/images/pdf.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'PDF',
  },
  {
    'file_name': 'style.css',
    'file_path': new URL('/src/assets/images/css.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'CSS',
  },
  {
    'file_name': 'document.docx',
    'file_path': new URL('/src/assets/images/doc.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'DOCX',
  },
  {
    'file_name': 'image.png',
    'file_path': new URL('/src/assets/images/product-img-2.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'PNG',
  },
  {
    'file_name': 'index.html',
    'file_path': new URL('/src/assets/images/html.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'HTML',
  },
  {
    'file_name': 'Image.js',
    'file_path': new URL('/src/assets/images/product-img-4.jpg', import.meta.url),
    'file_size': '573KB',
    'file_type': 'JPG',
  },
  {
    'file_name': 'index.php',
    'file_path': new URL('/src/assets/images/php.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'PHP',
  },
  {
    'file_name': 'shape.svg',
    'file_path': new URL('/src/assets/images/svg.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'SVG',
  },
  {
    'file_name': 'note.txt',
    'file_path': new URL('/src/assets/images/txt.png', import.meta.url),
    'file_size': '573KB',
    'file_type': 'TXT',
  },
]);

const gridView = ref('grid')
const toggleGridView = ((viewType) => {
  gridView.value = viewType
})
</script>

<template>
<DashboardBreadcrumb>
  <template #title>File Manager</template>
</DashboardBreadcrumb>
  <div class="row g-4 position-relative">
    <div class="col-xxl-2 col-lg-3 file-manager-sidebar-col">
      <FileManagerSidebar />
    </div>
    <div class="col-xxl-10 col-lg-9">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-all-files" role="tabpanel" aria-labelledby="nav-all-files-tab" tabindex="0">
          <div class="panel mb-25">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>All Files</h5>
              </div>
              <form class="file-search">
                <input type="search" id="fileSearch" class="form-control" placeholder="Search....">
                <button><i class="fa-light fa-magnifying-glass"></i></button>
              </form>
            </div>
            <div class="panel-body">
              <div class="row g-3">
                <div v-for="(file, index) in allFiles" :key="'folder_'+ index" class="col-md-3 col-sm-4 col-6">
                  <div class="file-manager-card">
                    <div class="top">
                      <div class="part-icon">
                        <span><i class="fa-duotone fa-folder-open"></i></span>
                      </div>
                      <div class="dropdown">
                        <button class="action" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-eye"></i></span> Details</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-share-nodes"></i></span> Share</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-copy"></i></span> Copy</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-arrows-up-down-left-right"></i></span> Move</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-download"></i></span> Download</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-pen"></i></span> Rename</a></li>
                          <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-trash"></i></span> Delete</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <button class="folder-name">{{ file.folder_name }}</button>
                        <span class="file-quantity">{{ file.file_quantity }} Files</span>
                      </div>
                      <div class="right">
                        <span class="storage-used">{{ file.storage_used }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-sm btn-primary"><i class="fa-light fa-eye"></i> Show All</button>
                    <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#createFolder"><i class="fa-light fa-plus"></i> Create Folder</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-header">
              <h5>Recent Files</h5>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary btn-grid-view" :class="{active: gridView === 'grid'}" @click="toggleGridView('grid')"><i class="fa-solid fa-grid-2"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary btn-list-view" :class="{active: gridView === 'list'}" @click="toggleGridView('list')"><i class="fa-regular fa-bars"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <FileList :recent-files="recentFiles" :gridView="gridView" />
              <div class="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button class="btn btn-sm btn-primary">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-shared-files" role="tabpanel" aria-labelledby="nav-shared-files-tab" tabindex="0">
          <div class="panel">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>Shared Files</h5>
              </div>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary btn-grid-view" :class="{active: gridView === 'grid'}" @click="toggleGridView('grid')"><i class="fa-solid fa-grid-2"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary btn-list-view" :class="{active: gridView === 'list'}" @click="toggleGridView('list')"><i class="fa-regular fa-bars"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <FileList :recent-files="recentFiles" :gridView="gridView" />
              <div class="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button class="btn btn-sm btn-primary">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-recent-files" role="tabpanel" aria-labelledby="nav-recent-files-tab" tabindex="0">
          <div class="panel">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>Recent Files</h5>
              </div>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary btn-grid-view" :class="{active: gridView === 'grid'}" @click="toggleGridView('grid')"><i class="fa-solid fa-grid-2"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary btn-list-view" :class="{active: gridView === 'list'}" @click="toggleGridView('list')"><i class="fa-regular fa-bars"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <FileList :recent-files="recentFiles" :gridView="gridView" />
              <div class="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button class="btn btn-sm btn-primary">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-starred-files" role="tabpanel" aria-labelledby="nav-starred-files-tab" tabindex="0">
          <div class="panel">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>Starred Files</h5>
              </div>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary btn-grid-view" :class="{active: gridView === 'grid'}" @click="toggleGridView('grid')"><i class="fa-solid fa-grid-2"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary btn-list-view" :class="{active: gridView === 'list'}" @click="toggleGridView('list')"><i class="fa-regular fa-bars"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <FileList :recent-files="recentFiles" :gridView="gridView" />
              <div class="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button class="btn btn-sm btn-primary">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-trash-files" role="tabpanel" aria-labelledby="nav-trash-files-tab" tabindex="0">
          <div class="panel">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>Trash Files</h5>
              </div>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary btn-grid-view" :class="{active: gridView === 'grid'}" @click="toggleGridView('grid')"><i class="fa-solid fa-grid-2"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary btn-list-view" :class="{active: gridView === 'list'}" @click="toggleGridView('list')"><i class="fa-regular fa-bars"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <FileList :recent-files="recentFiles" :gridView="gridView" />
              <div class="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button class="btn btn-sm btn-primary">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-file-manager-settings" role="tabpanel" aria-labelledby="nav-file-manager-settings-tab" tabindex="0">
          <div class="panel">
            <div class="panel-header">
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
                <h5>Settings</h5>
              </div>
            </div>
            <div class="panel-body">
              <nav>
                <div class="btn-box" id="nav-tab2" role="tablist">
                  <button class="btn btn-sm btn-outline-primary active" id="nav-general-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true">General</button>
                  <button class="btn btn-sm btn-outline-primary mx-2" id="nav-billings-tab" data-bs-toggle="tab" data-bs-target="#nav-billings" type="button" role="tab" aria-controls="nav-billings" aria-selected="false">Billings</button>
                  <button class="btn btn-sm btn-outline-primary" id="nav-notification-tab" data-bs-toggle="tab" data-bs-target="#nav-notification" type="button" role="tab" aria-controls="nav-notification" aria-selected="false">Notification</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent2">
                <FileManagerSettings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- upload file modal start -->
  <ModalWindow>
    <UploadFileModalComponent />
  </ModalWindow>
  <!-- upload file modal end -->

  <!-- create folder modal start -->
  <ModalWindow>
    <CreateFolderModalComponent />
  </ModalWindow>
  <!-- create folder modal end -->

  <!-- file details modal start -->
  <ModalWindow>
    <FileDetailsModalComponent />
  </ModalWindow>
  <!-- file details modal end -->
</template>

<style scoped>

</style>