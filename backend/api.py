from cmath import log
import os



class AuthSamples(object):

    url = "https://{}.blob.core.windows.net".format(
        os.getenv("AZURE_STORAGE_ACCOUNT_NAME")
    )

    shared_access_key = os.getenv("AZURE_STORAGE_ACCESS_KEY")
    
    BlobEndpoint="https://abortstorage.blob.core.windows.net/;SharedAccessSignature=sv=2021-06-08&ss=b&srt=sco&sp=rwdlaciyx&se=2022-10-22T18:00:43Z&st=2022-10-22T10:00:43Z&spr=https&sig=BmITjZMESrZ%2B2lPhQZQOhX%2FozGcow3n4amx9mkVs%2BE4%3D"
    
    def auth_blob_url(self):

        # [START create_blob_client]
        from azure.storage.blob import BlobClient
        blob_client = BlobClient.from_blob_url(blob_url="https://abortstorage.blob.core.windows.net/abortcontainer/csvjson.json")
        # [END create_blob_client]
        print(blob_client)

        # [START create_blob_client_sas_url]
        from azure.storage.blob import BlobClient

        sas_url = "https://abortstorage.blob.core.windows.net/?sv=2021-06-08&ss=b&srt=sco&sp=rwdlaciyx&se=2022-10-22T18:00:43Z&st=2022-10-22T10:00:43Z&spr=https&sig=BmITjZMESrZ%2B2lPhQZQOhX%2FozGcow3n4amx9mkVs%2BE4%3D"
        blob_client = BlobClient.from_blob_url(sas_url)

    def block_blob_sample(self):

        # Instantiate a new BlobServiceClient using a connection string
        from azure.storage.blob import BlobServiceClient
        blob_service_client = BlobServiceClient.from_connection_string("DefaultEndpointsProtocol=https;AccountName=abortstorage;AccountKey=cemY7t6Vj4ZnPgL74890iY8X1Iq1spARG8tChSCoYAtF8E0vCL5RRGqc1V9LNAXcOrO8lZwpM/ry+ASt9VHqvw==;EndpointSuffix=core.windows.net")

        # Instantiate a new ContainerClient
        container_client = blob_service_client.get_container_client("abortcontainerladen")
        # Instantiate a new BlobClient
        blob_client = container_client.get_blob_client("csvjson.json")

if __name__ == '__main__':
 sample = AuthSamples()
 sample.block_blob_sample()


