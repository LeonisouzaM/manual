
# PowerShell script to convert PNG to JPG with compression
Add-Type -AssemblyName System.Drawing

function Convert-To-Jpg {
    param (
        [string]$FilePath,
        [int]$Quality = 75
    )

    try {
        Write-Host "Converting $FilePath..."
        
        # Load image
        $bytes = [System.IO.File]::ReadAllBytes($FilePath)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $image = [System.Drawing.Image]::FromStream($ms)
        
        # Encoder params for quality
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

        # New File Path
        $newFilePath = $FilePath.Replace(".png", ".jpg")

        # Save as JPG
        $image.Save($newFilePath, $codec, $encoderParams)
        
        $image.Dispose()
        $ms.Dispose()
        
        Write-Host "Saved to $newFilePath"
        
        # Verify size difference
        $oldSize = (Get-Item $FilePath).Length
        $newSize = (Get-Item $newFilePath).Length
        Write-Host "Size reduced from $([math]::round($oldSize/1KB))KB to $([math]::round($newSize/1KB))KB"

        # Optional: Delete original if successful and smaller
        if ($newSize -lt $oldSize) {
            Remove-Item $FilePath
            Write-Host "Removed original PNG."
        }
    }
    catch {
        Write-Error "Failed to process $FilePath`: $_"
    }
}

$files = @("public\mechanic-cert.png", "public\authority-cert.png", "public\certificate-locked.png")
$pwd = Get-Location

foreach ($file in $files) {
    $fullPath = Join-Path $pwd $file
    if (Test-Path $fullPath) {
        Convert-To-Jpg -FilePath $fullPath
    }
}
