
# PowerShell script to resize images
Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$FilePath,
        [int]$MaxWidth
    )

    try {
        Write-Host "Processing $FilePath..."
        
        # Load image into a temp bitmap to release file lock on original
        $bytes = [System.IO.File]::ReadAllBytes($FilePath)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $image = [System.Drawing.Image]::FromStream($ms)
        
        # Calculate new dimensions
        if ($image.Width -le $MaxWidth) {
            Write-Host "Skipping $FilePath (Width $($image.Width) is smaller than $MaxWidth)"
            $image.Dispose()
            $ms.Dispose()
            return
        }

        $newWidth = $MaxWidth
        $newHeight = [int]($image.Height * ($MaxWidth / $image.Width))

        $resized = new-object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($resized)
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

        $graph.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        $image.Dispose()
        $ms.Dispose()

        # Save back to file (Overwriting)
        $resized.Save($FilePath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $resized.Dispose()
        $graph.Dispose()
        
        Write-Host "Resized $FilePath to $newWidth x $newHeight"
    }
    catch {
        Write-Error "Failed to process $FilePath`: $_"
    }
}

# Optimize specific files
$files = @("public\mechanic-cert.png", "public\authority-cert.png", "public\certificate-locked.png")
$pwd = Get-Location

foreach ($file in $files) {
    $fullPath = Join-Path $pwd $file
    if (Test-Path $fullPath) {
        Resize-Image -FilePath $fullPath -MaxWidth 800
    } else {
        Write-Warning "File not found: $fullPath"
    }
}
