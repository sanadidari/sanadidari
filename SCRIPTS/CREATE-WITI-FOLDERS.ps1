$baseDir = "C:\laragon\www\website-sanad\public\images\witi"
$apps = @(
    "nour", "governance", "witi-viral", "witi-social", "witi-studio", "witi-shopify",
    "autoscript", "flashboard", "mailflow", "sheetradar", "smartpaste", "resume-ranker"
)

if (!(Test-Path $baseDir)) {
    New-Item -ItemType Directory -Path $baseDir -Force
    Write-Host "Created base directory: $baseDir"
}

foreach ($app in $apps) {
    $appPath = Join-Path $baseDir $app
    if (!(Test-Path $appPath)) {
        New-Item -ItemType Directory -Path $appPath -Force
        Write-Host "Created directory for app: $app"
    } else {
        Write-Host "Directory already exists: $app"
    }
}

Write-Host "All WITI asset directories are ready. You can now place your screenshots in their respective folders." -ForegroundColor Green
