<script setup>

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
</script>

<template>
  <DashboardBreadcrumb>
    <template #title>Edit Profile</template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <nav>
            <div class="btn-box d-flex flex-wrap gap-1" id="nav-tab" role="tablist">
              <button class="btn btn-sm btn-outline-primary active" id="nav-edit-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-edit-profile" type="button" role="tab" aria-controls="nav-edit-profile" aria-selected="true">Edit Profile</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-change-password-tab" data-bs-toggle="tab" data-bs-target="#nav-change-password" type="button" role="tab" aria-controls="nav-change-password" aria-selected="false">Change Password</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-other-settings-tab" data-bs-toggle="tab" data-bs-target="#nav-other-settings" type="button" role="tab" aria-controls="nav-other-settings" aria-selected="false">Other Settings</button>
            </div>
          </nav>
        </div>
        <div class="panel-body">
          <div class="tab-content profile-edit-tab" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-edit-profile" role="tabpanel" aria-labelledby="nav-edit-profile-tab" tabindex="0">
              <form>
                <div class="profile-edit-tab-title">
                  <h6>Public Information</h6>
                </div>
                <div class="public-information mb-25">
                  <div class="row g-4">
                    <div class="col-md-3">
                      <div class="admin-profile">
                        <div class="image-wrap">
                          <div class="part-img rounded-circle overflow-hidden">
                            <img src="@/assets/images/admin.png" alt="admin">
                          </div>
                          <button class="image-change"><i class="fa-light fa-camera"></i></button>
                        </div>
                        <span class="admin-name">Mitchell C. Shay</span>
                        <span class="admin-role">Graphic Designer</span>
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="row g-3">
                        <div class="col-sm-6">
                          <div class="input-group">
                            <span class="input-group-text"><i class="fa-light fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="Full Name" value="Mitchell C. Shay">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="input-group">
                            <span class="input-group-text"><i class="fa-light fa-at"></i></span>
                            <input type="text" class="form-control" placeholder="Username" value="@mitchellc">
                          </div>
                        </div>
                        <div class="col-12">
                          <textarea class="form-control h-150-p" placeholder="Biography">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="profile-edit-tab-title">
                  <h6>Private Information</h6>
                </div>
                <div class="private-information mb-25">
                  <div class="row g-3">
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-user"></i></span>
                        <input type="text" class="form-control" placeholder="Unique ID" value="1D233">
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text"><i class="fa-light fa-user-tie"></i></span>
                        <select class="form-control form-select select-search" data-placeholder="Role">
                          <option value="">Role</option>
                          <option value="0">Admin</option>
                          <option value="1">Manager</option>
                          <option value="2">Project Manager</option>
                          <option value="3">Managing Director</option>
                          <option value="4">Chairman</option>
                          <option value="5" selected>Graphic Designer</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text"><i class="fa-light fa-circle-check"></i></span>
                        <select class="form-control form-select" data-placeholder="Status">
                          <option value="">Status</option>
                          <option value="0" selected>Enable</option>
                          <option value="1">Disable</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-envelope"></i></span>
                        <input type="email" class="form-control" placeholder="Email" value="example@mail.com">
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-phone"></i></span>
                        <input type="tel" class="form-control" placeholder="Phone" value="+0 123 456 789">
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-globe"></i></span>
                        <input type="url" class="form-control" placeholder="Website" value="https://themeforest.net/">
                      </div>
                    </div>
                    <div class="col-12">
                      <textarea class="form-control h-100-p" placeholder="Address">California, United States</textarea>
                    </div>
                  </div>
                </div>
                <div class="profile-edit-tab-title">
                  <h6>Social Information</h6>
                </div>
                <div class="social-information">
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-facebook-f"></i></span>
                        <input type="url" class="form-control" placeholder="Facebook" value="https://www.facebook.com/">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-twitter"></i></span>
                        <input type="url" class="form-control" placeholder="Twitter" value="https://twitter.com/">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-linkedin-in"></i></span>
                        <input type="url" class="form-control" placeholder="Linkedin" value="https://www.linkedin.com/">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-instagram"></i></span>
                        <input type="url" class="form-control" placeholder="Instagram" value="https://www.instagram.com/">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-youtube"></i></span>
                        <input type="url" class="form-control" placeholder="Youtube" value="https://www.youtube.com/">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-brands fa-pinterest-p"></i></span>
                        <input type="url" class="form-control" placeholder="Pinterest" value="https://www.pinterest.com/">
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-change-password" role="tabpanel" aria-labelledby="nav-change-password-tab" tabindex="0">
              <form>
                <div class="profile-edit-tab-title">
                  <h6>Change Password</h6>
                </div>
                <div class="social-information">
                  <div class="row g-3">
                    <div class="col-12">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                        <input type="password" class="form-control" placeholder="Current Password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                        <input type="url" class="form-control" placeholder="New Password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                        <input type="url" class="form-control" placeholder="Confirm Password">
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-other-settings" role="tabpanel" aria-labelledby="nav-other-settings-tab" tabindex="0">
              <div class="row">
                <div class="col-sm-6">
                  <div class="profile-edit-tab-title">
                    <h6>Activity Email Settings</h6>
                  </div>
                  <div class="activity-email-settings">
                    <form>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="activity-email-settings-1">
                        <label class="form-check-label" for="activity-email-settings-1">
                          Someone adds you as a connection
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="activity-email-settings-2">
                        <label class="form-check-label" for="activity-email-settings-2">
                          you're sent a direct message
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="activity-email-settings-3">
                        <label class="form-check-label" for="activity-email-settings-3">
                          New membership approval
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="activity-email-settings-4">
                        <label class="form-check-label" for="activity-email-settings-4">
                          Send Copy To Personal Email
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="activity-email-settings-5">
                        <label class="form-check-label" for="activity-email-settings-5">
                          Tips on getting more out of PCT-themes
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="profile-edit-tab-title">
                    <h6>Product Email Settings</h6>
                  </div>
                  <div class="product-email-settings">
                    <form>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="product-email-settings-1">
                        <label class="form-check-label" for="product-email-settings-1">
                          Someone adds you as a connection
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="product-email-settings-2">
                        <label class="form-check-label" for="product-email-settings-2">
                          you're sent a direct message
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="product-email-settings-3">
                        <label class="form-check-label" for="product-email-settings-3">
                          New membership approval
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="product-email-settings-4">
                        <label class="form-check-label" for="product-email-settings-4">
                          Send Copy To Personal Email
                        </label>
                      </div>
                      <div class="form-check mb-15">
                        <input class="form-check-input" type="checkbox" value="" id="product-email-settings-5">
                        <label class="form-check-label" for="product-email-settings-5">
                          Tips on getting more out of PCT-themes
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>