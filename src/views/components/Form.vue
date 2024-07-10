<script setup>
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import TextEditorComponent from "@/components/TextEditorComponent.vue";
import {onMounted, ref} from "vue";
import DropzoneComponent from "@/components/form/DropzoneComponent.vue";

const description = ref('');

onMounted(() => {
})
</script>

<template>
<DashboardBreadcrumb>
  <template #title>Form Elements</template>
</DashboardBreadcrumb>
  <div class="row">
    <div class="col-lg-6">
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Input Example</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="basicInput" class="form-label">Basic input</label>
              <input type="text" class="form-control" id="basicInput">
            </div>
            <div class="col-sm-6">
              <label for="inputWithPlaceholder" class="form-label">Input with placeholder</label>
              <input type="text" class="form-control" id="inputWithPlaceholder" placeholder="Placeholder">
            </div>
            <div class="col-sm-6">
              <label for="inputWithValue" class="form-label">Input with value</label>
              <input type="text" class="form-control" id="inputWithValue" value="Input value">
            </div>
            <div class="col-sm-6">
              <label for="readonlyPlainTextInput" class="form-label">Readonly plain text input</label>
              <input type="text" class="form-control-plaintext" id="readonlyPlainTextInput" value="Readonly input" readonly>
            </div>
            <div class="col-sm-6">
              <label for="readonlyInput" class="form-label">Readonly input</label>
              <input type="text" class="form-control" id="readonlyInput" value="Readonly input" readonly>
            </div>
            <div class="col-sm-6">
              <label for="disabledInput" class="form-label">Disabled input</label>
              <input type="text" class="form-control" id="disabledInput" value="Disabled input" disabled>
            </div>
            <div class="col-sm-6">
              <label for="inputWithIcon" class="form-label">Input with icon</label>
              <div class="input-group-with-icon">
                                    <span class="input-icon">
                                        <i class="fa-light fa-envelope"></i>
                                    </span>
                <input type="email" class="form-control ps-0" id="inputWithIcon" placeholder="example@info.com">
              </div>
            </div>
            <div class="col-sm-6">
              <label for="inputWithIconRight" class="form-label">Input with icon right</label>
              <div class="input-group-with-icon">
                <input type="email" class="form-control pe-0" id="inputWithIconRight" placeholder="example@info.com">
                <span class="input-icon">
                                        <i class="fa-light fa-envelope"></i>
                                    </span>
              </div>
            </div>
            <div class="col-sm-6">
              <label for="inputDate" class="form-label">Input date</label>
              <input type="date" class="form-control" id="inputDate">
            </div>
            <div class="col-sm-6">
              <label for="inputTime" class="form-label">Input time</label>
              <input type="time" class="form-control" id="inputTime">
            </div>
            <div class="col-sm-6">
              <label for="inputPassword" class="form-label">Input password</label>
              <input type="password" class="form-control" id="inputPassword" value="password">
            </div>
            <div class="col-sm-6">
              <label for="colorPicker" class="form-label">Color Picker</label>
              <input type="color" class="form-control form-control-color w-100" id="colorPicker" value="#0D99FF">
            </div>
            <div class="col-sm-6">
              <label for="datalistExample" class="form-label">Datalist example</label>
              <input type="text" class="form-control" list="datalistOptions" id="datalistExample">
              <datalist id="datalistOptions">
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Seattle">Seattle</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </datalist>
            </div>
            <div class="col-sm-6">
              <label for="roundedInput" class="form-label">Rounded input</label>
              <input type="text" class="form-control rounded-pill" id="roundedInput">
            </div>
            <div class="col-sm-6">
              <label for="floatingInput" class="form-label">Floating label</label>
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Floating label">
                <label for="floatingInput">Floating label</label>
              </div>
            </div>
            <div class="col-sm-6">
              <label for="exampleTextarea" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleTextarea"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>File Input</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="formFile" class="form-label">Default file input example</label>
              <input class="form-control" type="file" id="formFile">
            </div>
            <div class="col-sm-6">
              <label for="formFileMultiple" class="form-label">Multiple files input example</label>
              <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>
            <div class="col-sm-6">
              <label for="formFileDisabled" class="form-label">Disabled file input example</label>
              <input class="form-control" type="file" id="formFileDisabled" disabled>
            </div>
            <div class="col-sm-6">
              <label for="formFileSm" class="form-label">Small file input example</label>
              <input class="form-control form-control-sm" id="formFileSm" type="file">
            </div>
            <div class="col-sm-6">
              <label for="formFileLg" class="form-label">Large file input example</label>
              <input class="form-control form-control-lg" id="formFileLg" type="file">
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>Input Group</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
            </div>
            <div class="col-12">
              <div class="">
                <label for="basic-url" class="form-label">Your vanity URL</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Input Sizing</h5>
        </div>
        <div class="panel-body">
          <p class="fs-14 pb-1 mb-10">Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm.</code></p>
          <input class="form-control form-control-sm mb-10" type="text" placeholder=".form-control-sm">
          <input class="form-control mb-10" type="text" placeholder="Default input">
          <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Input Group Sizing</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-12">
              <div class="input-group input-group-sm">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Multiple Inputs & Addons</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-12">
              <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" class="form-control">
                <input type="text" aria-label="Last name" class="form-control">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Buttons, Checkboxs and Radios Group</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="input-group">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <button class="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-success" type="button" id="button-addon2">Button</button>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-success" type="button">Button</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" aria-label="Recipient's username with two button addons">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-success" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>Buttons with dropdowns</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-12">
              <div class="input-group">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" class="form-control" aria-label="Text input with dropdown button">
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <input type="text" class="form-control" aria-label="Text input with dropdown button">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="input-group">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action before</a></li>
                  <li><a class="dropdown-item" href="#">Another action before</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Form Layouts</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-lg-6">
              <div class="card mb-20">
                <div class="card-header">
                  Utilities
                </div>
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="formGroupExampleInput" class="form-label">Example label</label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
                    </div>
                    <div class="col-12">
                      <label for="formGroupExampleInput2" class="form-label">Another label</label>
                      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-20">
                <div class="card-header">
                  Form grid
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-20">
                <div class="card-header">
                  Column sizing
                </div>
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-sm-7">
                      <input type="text" class="form-control" placeholder="City" aria-label="City">
                    </div>
                    <div class="col-sm">
                      <input type="text" class="form-control" placeholder="State" aria-label="State">
                    </div>
                    <div class="col-sm">
                      <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Horizontal form
                </div>
                <div class="card-body">
                  <form>
                    <div class="row mb-20">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3">
                      </div>
                    </div>
                    <div class="row mb-20">
                      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3">
                      </div>
                    </div>
                    <fieldset class="row mb-20">
                      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                      <div class="col-sm-10">
                        <div class="form-check mb-10">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                          <label class="form-check-label" for="gridRadios1">
                            First radio
                          </label>
                        </div>
                        <div class="form-check mb-10">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                          <label class="form-check-label" for="gridRadios2">
                            Second radio
                          </label>
                        </div>
                        <div class="form-check disabled">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                          <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div class="row mb-20">
                      <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck1">
                          <label class="form-check-label" for="gridCheck1">
                            Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card mb-20">
                <div class="card-header">
                  Gutters
                </div>
                <div class="card-body">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Password</label>
                      <input type="password" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">Address 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-select form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mb-20">
                <div class="card-header">
                  Auto-sizing
                </div>
                <div class="card-body">
                  <form class="row gy-2 gx-3 align-items-center">
                    <div class="col-auto">
                      <label class="visually-hidden" for="autoSizingInput">Name</label>
                      <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
                    </div>
                    <div class="col-auto">
                      <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                      <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
                      </div>
                    </div>
                    <div class="col-auto">
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select form-select" id="autoSizingSelect">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                        <label class="form-check-label" for="autoSizingCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Inline forms
                </div>
                <div class="card-body">
                  <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                      <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                      <select class="form-select form-select" id="inlineFormSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                        <label class="form-check-label" for="inlineFormCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>File Uploader</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-lg-8 col-md-7">
              <div class="card component-jquery-uploader">
                <div class="card-header">
                  File Uploader
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-xxl-3 col-sm-4">
                      <div class="add-thumbnail product-image-upload product-image-upload-2">
                        <div class="part-txt">
                          <h5>Single Upload</h5>
                        </div>
                        <div class="jquery-uploader">
                          <div class="jquery-uploader-preview-container">
                            <div class="jquery-uploader-select-card">
                              <div class="jquery-uploader-select">
                                <input type="file" class="opacity-0 position-absolute h-100 w-100" />
                                <div class="upload-button">
                                  <i class="fa fa-plus"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-9 col-sm-8">
                      <div class="add-gallery-img product-image-upload product-image-upload-2">
                        <div class="part-txt">
                          <h5>Multiple Upload</h5>
                        </div>
                        <div class="jquery-uploader">
                          <div class="jquery-uploader-preview-container">
                            <div class="jquery-uploader-select-card">
                              <div class="jquery-uploader-select">
                                <input type="file" class="opacity-0 position-absolute h-100 w-100" multiple />
                                <div class="upload-button">
                                  <i class="fa fa-plus"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <DropzoneComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Rich Text Editor</h5>
        </div>
        <div class="panel-body">
          <div class="editor">
            <TextEditorComponent v-model="description"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>