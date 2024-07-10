<script setup>

</script>

<template>
  <div class="modal fade" id="fileDetailsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body file-details-modal">
          <div class="row g-4 align-items-center">
            <div class="col-sm-6">
              <div class="part-img">
                <img src="@/assets/images/product-img-2.png" alt="Image">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="part-txt">
                <ul class="file-details">
                  <li><span>Uploaded on:</span>November 20, 2022</li>
                  <li><span>Uploaded by:</span>Shaikh Abu Dardah</li>
                  <li><span>File name:</span>image.jpg</li>
                  <li><span>File type:</span>image/jpeg</li>
                  <li><span>File size:</span>104KB</li>
                  <li><span>Dimensions:</span>500 by 442 pixels</li>
                </ul>
                <form class="add-details">
                  <input type="text" class="form-control mb-15" placeholder="Alternative Text">
                  <input type="text" class="form-control mb-15" placeholder="Title">
                  <input type="text" class="form-control mb-15" placeholder="Caption">
                  <textarea class="form-control mb-15" placeholder="Description"></textarea>
                  <input type="url" class="form-control" placeholder="File URL: www.imagename.com">
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-success">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>