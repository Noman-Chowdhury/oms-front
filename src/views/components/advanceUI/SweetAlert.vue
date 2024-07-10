<script setup>
import {
  titleWithText,
  successMessage,
  modalWithTitle,
  modalWithLongContent,
  warningWithConfirm,
  bypassAlertCancel,
  messageWithCustomHeader,
  saClose,
  customHtmlAlert,
  saDialogThreeBtn,
  saPosition,
  customPaddingWidthAlert, ajaxAlert, saBasic
} from "@/composable/sweetalertManage";

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Sweet Alert</h5>
        </div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th>Alert Type</th>
                <th>Alert Example</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>A Basic Message</td>
                <td><button class="btn btn-sm btn-primary" id="saBasic" @click="saBasic">Click Me</button></td>
              </tr>
              <tr>
                <td>A Title with a Text Under</td>
                <td><button class="btn btn-sm btn-primary" id="saTitle" @click="titleWithText">Click Me</button></td>
              </tr>
              <tr>
                <td>A success message!</td>
                <td><button class="btn btn-sm btn-primary" id="saSuccess" @click="successMessage">Click Me</button></td>
              </tr>
              <tr>
                <td>A modal with a title, an error icon, a text, and a footer</td>
                <td><button class="btn btn-sm btn-primary" id="saError" @click="modalWithTitle">Click Me</button></td>
              </tr>
              <tr>
                <td>A modal window with a long content inside</td>
                <td><button class="btn btn-sm btn-primary" id="saLongcontent" @click="modalWithLongContent">Click Me</button></td>
              </tr>
              <tr>
                <td>A warning message, with a function attached to the "Confirm"-button</td>
                <td><button class="btn btn-sm btn-primary" id="saWarning" @click="warningWithConfirm">Click Me</button></td>
              </tr>
              <tr>
                <td>By passing a parameter, you can execute something else for "Cancel".</td>
                <td><button class="btn btn-sm btn-primary" id="saParams" @click="bypassAlertCancel">Click Me</button></td>
              </tr>
              <tr>
                <td>A message with custom Image Header</td>
                <td><button class="btn btn-sm btn-primary" id="saImage" @click="messageWithCustomHeader">Click Me</button></td>
              </tr>
              <tr>
                <td>A message with auto close timer</td>
                <td><button class="btn btn-sm btn-primary" id="saClose" @click="saClose">Click Me</button></td>
              </tr>
              <tr>
                <td>Custom HTML description and buttons</td>
                <td><button class="btn btn-sm btn-primary" id="customHtmlAlert" @click="customHtmlAlert">Click Me</button></td>
              </tr>
              <tr>
                <td>A dialog with three buttons</td>
                <td><button class="btn btn-sm btn-primary" id="saDialogThreeBtn" @click="saDialogThreeBtn">Click Me</button></td>
              </tr>
              <tr>
                <td>A custom positioned dialog</td>
                <td><button class="btn btn-sm btn-primary" id="saPosition" @click="saPosition">Click Me</button></td>
              </tr>
              <tr>
                <td>A message with custom width, padding and background</td>
                <td><button class="btn btn-sm btn-primary" id="customPaddingWidthAlert" @click="customPaddingWidthAlert">Click Me</button></td>
              </tr>
              <tr>
                <td>Ajax request example</td>
                <td><button class="btn btn-sm btn-primary" id="ajaxAlert" @click="ajaxAlert">Click Me</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>