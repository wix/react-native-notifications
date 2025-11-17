if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/danielel/.gradle/caches/8.10.2/transforms/875aa1778b69b3fea697ddfde2ed9b45/transformed/hermes-android-0.77.3-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/danielel/.gradle/caches/8.10.2/transforms/875aa1778b69b3fea697ddfde2ed9b45/transformed/hermes-android-0.77.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

