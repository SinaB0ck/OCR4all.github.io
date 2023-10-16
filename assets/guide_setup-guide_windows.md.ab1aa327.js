import{_ as o,o as s,c as l,k as e,a as n,t,Q as r}from"./chunks/framework.abd19ccc.js";const w=JSON.parse('{"title":"Windows","description":"","frontmatter":{"lang":"en-US","title":"Windows"},"headers":[],"relativePath":"guide/setup-guide/windows.md","filePath":"guide/setup-guide/windows.md","lastUpdated":1697448270000}'),i={name:"guide/setup-guide/windows.md"},c={id:"setup-guide-–-frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#setup-guide-–-frontmatter-title","aria-label":'Permalink to "Setup guide – {{ $frontmatter.title }}"'},"​",-1),d=r(`<h2 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h2><p>You have to prepare the following folder structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">├── ocr4all</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── data</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   ├── [Your book]</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   ├── input</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   |   ├── 0001.png</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   |   ├── 0002.png</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   |   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   ├── [Another book]</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   ├── input</span></span>
<span class="line"><span style="color:#e1e4e8;">│   |   |   |   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── models</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">├── ocr4all</span></span>
<span class="line"><span style="color:#24292e;">│   ├── data</span></span>
<span class="line"><span style="color:#24292e;">│   |   ├── [Your book]</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   ├── input</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   |   ├── 0001.png</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   |   ├── 0002.png</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   |   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   |   ├── [Another book]</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   ├── input</span></span>
<span class="line"><span style="color:#24292e;">│   |   |   |   ...</span></span>
<span class="line"><span style="color:#24292e;">│   ├── models</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><p>Explanation:</p><ul><li><code>ocr4all</code> (main folder)</li><li><code>models</code> (folder for the neural network models)</li><li><code>data</code> (folder for the documents you want to recognize)</li><li><code>[Your book]</code> (folder that contains all data of a single, specific print/book)</li><li><code>input</code> (folder for original, coloured / grayscaled book scans on page level)</li></ul><h2 id="choosing-the-right-docker-version" tabindex="-1">Choosing the right Docker version <a class="header-anchor" href="#choosing-the-right-docker-version" aria-label="Permalink to &quot;Choosing the right Docker version&quot;">​</a></h2><ul><li>You will need the Community Edition (CE) of Docker for installation.</li><li>Docker for Windows: <ul><li>Available for Windows 10, 64 bit: Pro, Enterprise or Education (Build 14393 or later; check for your version, which can be found in your System Information)</li><li><a href="https://docs.docker.com/docker-for-windows/release-notes/" target="_blank" rel="noreferrer">https://docs.docker.com/docker-for-windows/release-notes/</a> (If you do not want to register, do not chose “Download Docker for Windows” right away, but instead use “Download” under the “Stable Releases” section below)</li></ul></li></ul><h2 id="docker-for-windows" tabindex="-1">Docker for Windows <a class="header-anchor" href="#docker-for-windows" aria-label="Permalink to &quot;Docker for Windows&quot;">​</a></h2><h3 id="docker-setup" tabindex="-1">Docker Setup <a class="header-anchor" href="#docker-setup" aria-label="Permalink to &quot;Docker Setup&quot;">​</a></h3><ul><li><p>Follow the installation guide under <a href="https://docs.docker.com/desktop/windows/install/" target="_blank" rel="noreferrer">https://docs.docker.com/desktop/windows/install/</a>.</p></li><li><p>Make sure to give all needed permissions, install all additional drivers etc.</p></li><li><p>Start Docker.</p></li><li><p>Adjust the Docker settings (Right-click on the Docker symbol in the hidden bottom-right toolbar, then chose Settings):</p><ul><li><em>Shared Drives</em>: Chosen drive (or partition). <ul><li>You will need at least one. Our recommendation: Simply use <code>C:</code>.</li><li>Click Apply. (Attention: This requires a valid, non-empty Windows password. Changing or removing the password later results in a silent removal of your Docker privileges!).</li></ul></li><li><em>Advanced</em>: Adjust CPUs (max) and Memory (2GB+) if you want to.</li></ul></li></ul><h3 id="ocr4all-setup" tabindex="-1">OCR4all Setup <a class="header-anchor" href="#ocr4all-setup" aria-label="Permalink to &quot;OCR4all Setup&quot;">​</a></h3><ul><li>Move the OCR4all folder structure detailed above (<code>Preparation</code>) to the shared drive (or partition). In the following example, we use <code>C:\\Users\\Public\\ocr4all\\...</code>. We recommend to use the same for the first setup.</li><li>Inside the OCR4all folder, open PowerShell (Shift + right click inside OCR4all folder -&gt; Open PowerShell window here) and load an OCR4all image using the following command (this will take up a few minutes and requires a stable connection to the internet):</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker pull uniwuezpd/ocr4all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker pull uniwuezpd/ocr4all</span></span></code></pre></div><ul><li>Create the OCR4all container using the following command (Note: this works only for the recommended setup, i.e. when the OCR4all folder is located in <code>C:\\Users\\Public\\...</code>)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker run -p 1476:8080 --name ocr4all -v C:\\Users\\Public\\ocr4all\\data:/var/ocr4all/data -v C:\\Users\\Public\\ocr4all\\models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker run -p 1476:8080 --name ocr4all -v C:\\Users\\Public\\ocr4all\\data:/var/ocr4all/data -v C:\\Users\\Public\\ocr4all\\models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all</span></span></code></pre></div><ul><li><p>Do not enter line breaks manually!</p></li><li><p>Alternatively, you will have to adjust the paths marked in bold print.</p><ul><li>Use absolute paths!</li><li>Use auto completion! (default: Tabulator)</li><li>It is recommended to not use print working directory (PWD) in this case.</li></ul></li></ul><h3 id="browser-access-and-further-use" tabindex="-1">Browser access and further use <a class="header-anchor" href="#browser-access-and-further-use" aria-label="Permalink to &quot;Browser access and further use&quot;">​</a></h3><ul><li><p>OCR4all is optimized for Chrome/Chromium.</p></li><li><p>Browser access: <a href="http://localhost:1476/ocr4all/" target="_blank" rel="noreferrer"><a href="http://localhost:1476/ocr4all/" target="_blank" rel="noreferrer">http://localhost:1476/ocr4all/</a></a>- If you want to check whether the mapping is working correctly you can add the example projects <code>Cirurgia</code> and <code>GNM</code> from <a href="https://github.com/OCR4all/getting_started/tree/master/ocr4all/data" target="_blank" rel="noreferrer">here</a> to your <code>data</code> directory. In the browser, check <code>Project Overview</code> -&gt; <code>Project selection</code>: If you can find the two aforementioned books (or any other book that you added), the mapping (<code>-v C:\\Users\\...</code>) is working properly.</p></li><li><p>Otherwise, there might be a typo in the <code>docker run</code> command, so you will have to create the container again. First, delete the container you just created:</p></li><li><p>Stop the process in PowerShell using CTRL + C, then type:</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker rm ocr4all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker rm ocr4all</span></span></code></pre></div><ul><li>Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the two <code>-v C:\\Users\\..</code> lines, then run it again.</li><li>If everything is set up properly, you are able to restart OCR4all in the future by using</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker start –ia ocr4all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker start –ia ocr4all</span></span></code></pre></div>`,21);function u(a,h,g,m,k,y){return s(),l("div",null,[e("h1",c,[n("Setup guide – "+t(a.$frontmatter.title)+" ",1),p]),d])}const b=o(i,[["render",u]]);export{w as __pageData,b as default};
