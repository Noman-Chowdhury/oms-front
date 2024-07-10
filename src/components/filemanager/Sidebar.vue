<script setup>

</script>

<template>
  <div class="file-manager-sidebar">
    <div class="panel mb-25">
      <div class="panel-body">
        <div class="d-flex gap-1">
          <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#fileUploadModal"><i class="fa-regular fa-plus"></i> Upload File</button>
          <button class="btn btn-icon btn-primary close-file-manager-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
        </div>
        <nav>
          <div class="nav" id="nav-tab" role="tablist">
            <button class="file-manager-tab-btn w-100 all-files-tab active" id="nav-all-files-tab" data-bs-toggle="tab" data-bs-target="#nav-all-files" type="button" role="tab" aria-controls="nav-all-files" aria-selected="true">All Files <i class="fa-light fa-angle-right"></i></button>
            <div class="divider-dash"></div>
            <ul class="connected-app">
              <li class="file-manager-sidebar-title">Connected Apps</li>
              <li><a href="https://drive.google.com/"><span class="text-warning"><i class="fa-brands fa-google-drive"></i></span> Google Drive</a></li>
              <li><a href="https://www.dropbox.com"><span class="text-info"><i class="fa-brands fa-dropbox"></i></span> Dropbox</a></li>
            </ul>
            <div class="divider-dash"></div>
            <div class="other-files">
              <button class="file-manager-tab-btn w-100" id="nav-shared-files-tab" data-bs-toggle="tab" data-bs-target="#nav-shared-files" type="button" role="tab" aria-controls="nav-shared-files" aria-selected="false"><span><i class="fa-light fa-share-nodes"></i></span> Shared Files</button>
              <button class="file-manager-tab-btn w-100" id="nav-recent-files-tab" data-bs-toggle="tab" data-bs-target="#nav-recent-files" type="button" role="tab" aria-controls="nav-recent-files" aria-selected="false"><span><i class="fa-light fa-clock"></i></span> Recent Files</button>
              <button class="file-manager-tab-btn w-100" id="nav-starred-files-tab" data-bs-toggle="tab" data-bs-target="#nav-starred-files" type="button" role="tab" aria-controls="nav-starred-files" aria-selected="false"><span><i class="fa-light fa-star"></i></span> Starred</button>
              <button class="file-manager-tab-btn w-100" id="nav-trash-files-tab" data-bs-toggle="tab" data-bs-target="#nav-trash-files" type="button" role="tab" aria-controls="nav-trash-files" aria-selected="false"><span><i class="fa-light fa-trash"></i></span> Trash</button>
              <button class="file-manager-tab-btn w-100" id="nav-file-manager-settings-tab" data-bs-toggle="tab" data-bs-target="#nav-file-manager-settings" type="button" role="tab" aria-controls="nav-file-manager-settings" aria-selected="false"><span><i class="fa-light fa-gear"></i></span> Settings</button>
            </div>
          </div>
        </nav>
        <div class="divider-dash"></div>
        <ul class="file-category-status">
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span class="text-success"><i class="fa-regular fa-image"></i></span>
                <p>Images</p>
              </div>
              <span class="using-storage">47 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style="width: 25%"></div>
            </div>
          </li>
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span class="text-danger-emphasis"><i class="fa-regular fa-video"></i></span>
                <p>Videos</p>
              </div>
              <span class="using-storage">35 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style="width: 25%"></div>
            </div>
          </li>
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span class="text-primary"><i class="fa-regular fa-file"></i></span>
                <p>Docs</p>
              </div>
              <span class="using-storage">47 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-primary" style="width: 25%"></div>
            </div>
          </li>
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span class="text-warning"><i class="fa-regular fa-music"></i></span>
                <p>Music</p>
              </div>
              <span class="using-storage">35 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-warning" style="width: 25%"></div>
            </div>
          </li>
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span class="text-info"><i class="fa-regular fa-download"></i></span>
                <p>Downloads</p>
              </div>
              <span class="using-storage">47 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style="width: 25%"></div>
            </div>
          </li>
          <li>
            <div class="progress-txt">
              <div class="file-category-name">
                <span><i class="fa-regular fa-grid-2"></i></span>
                <p>More</p>
              </div>
              <span class="using-storage">35 MB</span>
            </div>
            <div class="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-secondary" style="width: 25%"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="panel-body">
        <div class="storage-status">
          <div class="progress-txt">
            <div class="file-category-name">
              <span><i class="fa-light fa-hard-drive"></i></span>
              <p>Total Storage</p>
            </div>
          </div>
          <div class="progress-stacked">
            <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
              <div class="progress-bar bg-success"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
              <div class="progress-bar bg-danger"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <div class="progress-bar bg-primary"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Segment four" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
              <div class="progress-bar bg-warning"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Segment five" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">
              <div class="progress-bar bg-info"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Segment six" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
              <div class="progress-bar bg-secondary"></div>
            </div>
          </div>
          <p>13 GB of 15 GB Available </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>