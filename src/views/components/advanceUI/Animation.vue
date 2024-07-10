<script setup>

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
</script>

<template>
<DashboardBreadcrumb>
  <template #title>Animation</template>
</DashboardBreadcrumb>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Fade Animation</h5>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Up
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-up<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-up">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Down
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-down<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-down">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Up Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-up-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-up-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Up Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-up-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-up-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Down Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-down-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-down-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Fade Down Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>fade-down-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="fade-down-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
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
          <h5>Flip Animation</h5>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Flip Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>flip-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="flip-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Flip Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>flip-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="flip-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Flip Up
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>flip-up<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="flip-up">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Flip Down
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>flip-down<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="flip-down">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
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
          <h5>Zoom Animation</h5>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom In
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-in<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-in">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom In Up
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-in-up<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-in-up">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom In Down
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-in-down<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-in-down">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom In Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-in-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-in-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom In Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-in-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-in-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom Out
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-out<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-out">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom Out Up
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-out-up<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-out-up">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom Out Down
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-out-down<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-out-down">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom Out Left
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-out-left<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-out-left">
                    <img src="@/assets/images/animation-card.png" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  Zoom Out Right
                </div>
                <div class="card-body animation-card">
                  <div class="bg-primary-subtle p-1 mb-15 rounded">
                    <pre class="language-markup" tabindex="0"><code class="language-markup"><span class="tag"><span class="tag"><span class="punctuation">&lt;</span>div</span> <span class="attr-name">data-aos</span><span class="attr-value"><span class="punctuation attr-equals">=</span><span class="punctuation">"</span>zoom-out-right<span class="punctuation">"</span></span><span class="punctuation">&gt;</span></span><span class="tag"><span class="tag"><span class="punctuation">&lt;/</span>div</span><span class="punctuation">&gt;</span></span></code></pre>
                  </div>
                  <div class="text-center" data-aos="zoom-out-right">
                    <img src="@/assets/images/animation-card.png" alt="Image">
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